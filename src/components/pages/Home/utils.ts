import { FormEvent } from "react";

export const submitRsvp = async (
  event: FormEvent<HTMLFormElement>
): Promise<Response> => {
  event.preventDefault();

  const formElements = (Array.from(
    event.currentTarget.elements
  ) as HTMLInputElement[]).filter((elem) => !!elem.value);

  const urlEncodedForm: string = formElements
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
