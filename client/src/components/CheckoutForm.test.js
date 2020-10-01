import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //render app without breaking
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument()

});

test("form shows success message on submit with form details", async() => {
    //render app without breaking
    render(<CheckoutForm />)
    //find the inputs
const firstName = screen.getByPlaceholderText(/melissa/i)
const lastName = screen.getByPlaceholderText(/plants/i)
const address = screen.getByPlaceholderText(/201 south strand/i)
const city = screen.getByPlaceholderText(/oceanside/i)
const state = screen.getByPlaceholderText(/state/i)
const zip = screen.getByPlaceholderText(/zip/i)
    //fill the inputs
    fireEvent.change(firstName, { target: { value: "Melissa" } });
    fireEvent.change(lastName, { target: { value: "Tanksley" } });
    fireEvent.change(address, { target: { value: "201 South Strand" } });
    fireEvent.change(city, { target: { value: "Oceanside" } });
    fireEvent.change(state, { target: { value: "California" } });
    fireEvent.change(zip, { target: { value: "92054" } });
    //find the button
const submitBtn = screen.getByRole('button')

    //click the button
    fireEvent.click(submitBtn)

    //assert that the success message has posted
    expect(await screen.findByText(/Melissa/i)).toBeInTheDocument()
});