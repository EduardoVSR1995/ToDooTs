import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import App from './App';

function getText(value: string){
  return screen.getByText(value);
}

describe("Layout tests",()=>{
  test("Title header", () => {
    render(<App />);

    const title = getText("To Doo");

    expect(title).toBeInTheDocument();
  });  

  test("Title placeholder", () => {
    render(<App />);

    const titlePlaceholder = screen.getByPlaceholderText("Digite seu item aqui");

    expect(titlePlaceholder).toBeInTheDocument();
  });  

  test("Title booton", () => {
    render(<App />);

    const titleButton = getText("Colocar na lista");

    expect(titleButton).toBeInTheDocument();
  });  

  test("Execut insert list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Digite seu item aqui");

    const name = "ola";

    userEvent.type(input, name);

    userEvent.click(getText("Colocar na lista"));
    
    const element = getText(name);

    expect(element).toBeInTheDocument();
  });  

  test("Do not perform insertion with empty space", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Digite seu item aqui");

    userEvent.type(input, " ");

    userEvent.click(getText("Colocar na lista"));

    expect(screen.queryByText(/apagar/i)).not.toBeInTheDocument();
  });  

})
