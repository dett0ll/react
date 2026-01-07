//htmlFor is used to map label with input type. What value is in id of input, taht value should be used here
export default function Form() {
  function onSubmit(FormData) {
    //event.preventDefault(); don't need this line it will automatically do it
    //console.log(event.target) // prints complete form
   // let formElements = event.currentTarget;
    //console.log(formElements); //prints complete form
   // let formData = new FormData(formElements);
   // console.log(formData);
    console.log(FormData.get("email")); //it will print email id
    console.log(FormData.get("password"));
    //formElements.reset(); // values we submitted will not show in form page // reset will also automatically happen
  }

  return (
    <>
      <section>
        <h2>Sign up form</h2>
        <form action={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="test@test.com"
          ></input>{" "}
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
