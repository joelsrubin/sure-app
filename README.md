### Build a React application with the following two screens:

1. Rating Information [x]
2. Quote Overview [x]

These two screens will hit our API described below to generate a quote for the customer.

### Create a screen with a form to collect the rating information.

- `first_name` [String]

  (**Required)** The customer's first name.

- `last_name` [String]

  **(Required)** The customer's last name.

- `address` [Object]

  - `line_1` [String]

    **(Required)** The rating address line 1.

  - `line_2` [String|null]

    _(Optional)_ The rating address apartment, unit, or suite.

  - `city` [String]

    **(Required)** The rating address city.

  - `region` [String]

    **(Required)** The rating address region in the form of a US State abbreviation.

  - `postal` [String]

    **(Required)** The rating address 5-digit postal code. - [x]

Create a form with a `<select>` dropdown for each of the policy coverage variables. This allows the user to select a preferred option for each variable.

`deductible` - [x]

This is the deductible limit for the policy.

`asteroid_collision` - [x]

This is the coverage limit for damages from asteroid collisions.

ℹ️ Use the `title`, `description`, and `values` fields to display the available coverage options.

ℹ️ The `variable_selections` fields are the currently selected coverage values for the policy. These are defaulted to the variable options defaults.

ℹ️ The `premium` value is the total annual premium in USD. E.g. `6000` equals $6000.
