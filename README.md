## Build a React application with the following two screens:

- [x] 1. Rating Information
     <img height="572" alt="Screen Shot 2021-12-14 at 3 23 59 PM" src="https://user-images.githubusercontent.com/68345201/146083015-3fb68ea6-0b15-4700-81db-230fd37f802f.png">

- [x] 2. Quote Overview
     <img width="500" alt="Screen Shot 2021-12-14 at 3 24 09 PM" src="https://user-images.githubusercontent.com/68345201/146082992-2873bb0b-dc15-4901-9716-c0e24eb98260.png">

## Running the App:

After cloning the repo, cd into the directory and, in the terminal, run the following commands:

1. `npm install`
2. `npm run build`
3. `npm run dev`

To run the Cypress test suite, run the following command in the terminal:

4. `npm run test`

## Project Requirements:

These two screens will hit our API described below to generate a quote for the customer.

### Create a screen with a form to collect the rating information.

- `first_name` [String]

- [x] (**Required)** The customer's first name.

- `last_name` [String]

- [x] **(Required)** The customer's last name.

- `address` [Object]

  - `line_1` [String]

- [x] **(Required)** The rating address line 1.

  - `line_2` [String|null]

- [x] _(Optional)_ The rating address apartment, unit, or suite.

  - `city` [String]

- [x] **(Required)** The rating address city.

  - `region` [String]

- [x] **(Required)** The rating address region in the form of a US State abbreviation.

  - `postal` [String]

- [x] **(Required)** The rating address 5-digit postal code.

### Create a form with a `<select>` dropdown for each of the policy coverage variables. This allows the user to select a preferred option for each variable.

- [x] `deductible`

This is the deductible limit for the policy.

- [x] `asteroid_collision`

This is the coverage limit for damages from asteroid collisions.

- [x] The default selections for these dropdowns should be the first value in `quote.variable_options[name].values`.

- [x] Use the `title`, `description`, and `values` fields to display the available coverage options.

- [x] The `variable_selections` fields are the currently selected coverage values for the policy. These are defaulted to the variable options defaults.

- [x] The `premium` value is the total annual premium in USD. E.g. `6000` equals $6000.

### To update a quote and recalculate the premium, make a PUT request to the following endpoint:

`https://fed-challenge-api.sure.now.sh/api/v1/quotes/:quoteId`

- [x] Use the `quoteId` from the quote object you created.
