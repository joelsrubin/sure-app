### Build a React application with the following two screens:

1. Rating Information [x]
2. Quote Overview [x]

### Running the App:

After cloning the repo, in the terminal run the following commands:

1. `npm install`
2. `npm run build`
3. `npm run dev`

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

Create a form with a `<select>` dropdown for each of the policy coverage variables. This allows the user to select a preferred option for each variable.

- [x] `deductible`

This is the deductible limit for the policy.

- [x] `asteroid_collision`

This is the coverage limit for damages from asteroid collisions.

- [x] Use the `title`, `description`, and `values` fields to display the available coverage options.

- [x] The `variable_selections` fields are the currently selected coverage values for the policy. These are defaulted to the variable options defaults.

- [x] The `premium` value is the total annual premium in USD. E.g. `6000` equals $6000.
