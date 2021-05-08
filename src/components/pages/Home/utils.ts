import { FormEvent } from "react";

export const submitRsvp = async (
  event: FormEvent<HTMLFormElement>
): Promise<void> => {
  event.preventDefault();

  const formElements = Array.from(
    event.currentTarget.elements
  ) as HTMLInputElement[];

  const urlEncodedForm: string = formElements
    .filter((elem: HTMLInputElement) => !!elem.value)
    .map(
      (element) =>
        encodeURIComponent(element.name) +
        "=" +
        encodeURIComponent(element.value || "")
    )
    .join("&");

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlEncodedForm,
  }).catch(() => {
    alert("Error occurred. Please try again.");
  });
};
