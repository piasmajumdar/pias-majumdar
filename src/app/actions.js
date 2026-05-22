"use server";

export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const accessKey = process.env.WEB3_FORM_KEY;

  if (!accessKey) {
    console.error("WEB3_FORM_KEY is missing from environment variables.");
    return { success: false, message: "Server configuration error: Contact API key is not configured." };
  }

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New Portfolio Message from ${name}`,
        from_name: "Portfolio Contact Form"
      }),
    });

    const result = await response.json();
    if (result.success) {
      return { success: true, message: "Your message has been sent successfully!" };
    } else {
      return { success: false, message: result.message || "Something went wrong. Please try again." };
    }
  } catch (error) {
    console.error("Error submitting contact form to Web3Forms:", error);
    return { success: false, message: "Failed to connect to contact service. Please try again later." };
  }
}
