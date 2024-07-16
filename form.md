# Form

To make a form use form tag. Form tag is used to create an HTML form for user input.

```html
<form></form>
```

Form tag has many attributes like action, method, target, etc.

- **action**: It is used to specify the URL where the form data will be sent.

- **method**: It is used to specify the HTTP method to be used when sending form data.

- **target**: It is used to specify where to display the response that is received after submitting the form.

- **autocomplete**: It is used to specify whether a form should have autocomplete on or off.

- **enctype**: It is used to specify how the form data should be encoded when submitting it to the server.

## Take User Input

To take user input, use input tag. Input tag is used to create an input field that can be filled out by the user.

```html
<input type="text" />
```

Input tag has many attributes like type, name, value, etc.

- **type**: It is used to specify the type of input field.

- **name**: It is used to specify the name of the input field.

- **value**: It is used to specify the value of the input field.

- **placeholder**: It is used to specify a short hint that describes the expected value of an input field.

```html
<form action="/submit" method="post">
  <input type="text" placeholder="Enter your name" />
  <br />
  <input type="email" placeholder="Enter your email" />
  <br />
  <input type="submit" value="Submit" />
</form>
```

### Types of Input Fields

- **text**: It is used to create a single-line text input field.

- **password**: It is used to create a password input field.

- **email**: It is used to create an email input field.

- **number**: It is used to create a number input field.

- **date**: It is used to create a date input field.

- **checkbox**: It is used to create a checkbox input field.

- **radio**: It is used to create a radio button input field.

- **submit**: It is used to create a submit button.

- **reset**: It is used to create a reset button.

- **file**: It is used to create a file input field.

- **hidden**: It is used to create a hidden input field.

- **image**: It is used to create an image input field.

- **button**: It is used to create a button input field.

- **color**: It is used to create a color input field.

- **range**: It is used to create a range input field.

- **search**: It is used to create a search input field.

- **tel**: It is used to create a telephone input field.

- **time**: It is used to create a time input field.

- **url**: It is used to create a URL input field.

- **week**: It is used to create a week input field.

## Labels
