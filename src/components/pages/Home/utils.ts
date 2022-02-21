import { FormEvent } from "react";

export const submitRsvp = async (
  event: FormEvent<HTMLFormElement>
): Promise<Response> => {
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

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlEncodedForm,
  });
};
