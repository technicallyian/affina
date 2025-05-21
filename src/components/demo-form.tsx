import * as LabelPrimitive from "@radix-ui/react-label";

export function DemoForm() {
  async function handleSubmit(formData: FormData) {
    "use server";

    // Define interfaces for Pipedrive API responses
    interface PipedriveOrgSearchItemDetails {
      id: number;
    }
    interface PipedriveOrgSearchResultWrapper {
      item: PipedriveOrgSearchItemDetails;
    }
    interface PipedriveOrgSearchResponse {
      success?: boolean;
      data?: {
        items?: PipedriveOrgSearchResultWrapper[];
      } | null;
    }

    interface PipedriveSuccessData {
      id: number;
    }
    interface PipedriveCreateResponse {
      success: boolean;
      data?: PipedriveSuccessData;
      // You might want to add fields for error responses, e.g.
      // error?: string;
      // errors?: Record<string, string>;
    }

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const title = formData.get("title") as string;
    const organization = formData.get("organization") as string;
    const additionalNotes = formData.get("additionalNotes") as string | null;

    const pipedriveApiKey = process.env.PIPEDRIVE_API_KEY;
    const pipedriveDomain = process.env.PIPEDRIVE_DOMAIN;

    if (!pipedriveApiKey || !pipedriveDomain) {
      console.error("Pipedrive API Key or Domain is not set in environment variables.");
      // Optionally, you could return an error message to the user here
      return;
    }

    console.log("Submitting to Pipedrive:", {
      fullName,
      email,
      phone,
      title,
      organization,
      additionalNotes,
    });

    try {
      // 1. Create or find Organization
      let orgId;
      if (organization) {
        const orgSearchResponse = await fetch(
          `https://${pipedriveDomain}.pipedrive.com/api/v1/organizations/search?term=${encodeURIComponent(organization)}&exact_match=true&limit=1&api_token=${pipedriveApiKey}`
        );
        const orgSearchData: PipedriveOrgSearchResponse = await orgSearchResponse.json();

        if (orgSearchData.data && orgSearchData.data.items && orgSearchData.data.items.length > 0) {
          orgId = orgSearchData.data.items[0].item.id;
        } else {
          const createOrgResponse = await fetch(
            `https://${pipedriveDomain}.pipedrive.com/api/v1/organizations?api_token=${pipedriveApiKey}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: organization }),
            }
          );
          const createOrgData: PipedriveCreateResponse = await createOrgResponse.json();
          if (createOrgData.success && createOrgData.data) {
            orgId = createOrgData.data.id;
          } else {
            console.error("Failed to create organization:", createOrgData);
            // Handle error - maybe return a message to the user
            return;
          }
        }
      }

      // 2. Create Person
      const personData: { 
        name: string; 
        email: string[]; 
        phone?: string[]; 
        org_id?: number; 
        [key: string]: string | number | boolean | string[] | number[] | null | undefined;
      } = {
        name: fullName,
        email: [email],
      };
      if (phone) {
        personData.phone = [phone];
      }
      if (orgId) {
        personData.org_id = orgId;
      }

      // Add title as a custom field if needed, or include in notes.
      // For now, let's assume 'title' might be a custom field you've set up in Pipedrive.
      // If you have a custom field ID for 'Title', you'd add it here.
      // For example: personData['your_custom_field_api_key_for_title'] = title;

      const createPersonResponse = await fetch(
        `https://${pipedriveDomain}.pipedrive.com/api/v1/persons?api_token=${pipedriveApiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personData),
        }
      );

      const createPersonData: PipedriveCreateResponse = await createPersonResponse.json();

      if (createPersonData.success && createPersonData.data) {
        const personId = createPersonData.data.id;
        console.log("Successfully created person:", personId);

        // 3. Add Note to Person
        let noteContent = `Form Submission:
        Title: ${title}
        Organization: ${organization}`; // Organization name included for context even if linked
        if (additionalNotes) {
          noteContent += `\nAdditional Notes: ${additionalNotes}`;
        }
        // If title is not a custom field, add it to the note:
        // noteContent += `\nTitle: ${title}`;


        const createNoteResponse = await fetch(
          `https://${pipedriveDomain}.pipedrive.com/api/v1/notes?api_token=${pipedriveApiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: noteContent,
              person_id: personId,
              // org_id: orgId, // Optionally link note to org as well
            }),
          }
        );
        const createNoteData: PipedriveCreateResponse = await createNoteResponse.json();
        if (createNoteData.success && createNoteData.data) {
          console.log("Successfully added note to person:", createNoteData.data.id);
          // Handle successful submission (e.g., show a success message, redirect)
        } else {
          console.error("Failed to add note:", createNoteData);
          // Handle error
        }
      } else {
        console.error("Failed to create person:", createPersonData);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form to Pipedrive:", error);
      // Handle error
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <LabelPrimitive.Root htmlFor="fullName">Full Name</LabelPrimitive.Root>
        <input type="text" id="fullName" name="fullName" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <LabelPrimitive.Root htmlFor="email">Email</LabelPrimitive.Root>
        <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <LabelPrimitive.Root htmlFor="phone">Phone (Optional)</LabelPrimitive.Root>
        <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <LabelPrimitive.Root htmlFor="title">Title</LabelPrimitive.Root>
        <input type="text" id="title" name="title" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <LabelPrimitive.Root htmlFor="organization">Organization</LabelPrimitive.Root>
        <input type="text" id="organization" name="organization" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <LabelPrimitive.Root htmlFor="additionalNotes">Additional Notes (Optional)</LabelPrimitive.Root>
        <textarea id="additionalNotes" name="additionalNotes" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="w-full bg-primary text-primary-foreground p-2 rounded-md">Submit</button>
    </form>
  );
} 