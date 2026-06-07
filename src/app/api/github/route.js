import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: "GitHub credentials not configured" },
      { status: 500 }
    );
  }

  // GraphQL query to fetch the total contributions for the current year
  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
      // Revalidate the cache every 12 hours to stay well within API limits
      next: { revalidate: 43200 }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const data = await response.json();
    const totalContributions =
      data.data.user.contributionsCollection.contributionCalendar.totalContributions;

    return NextResponse.json({ totalContributions });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
