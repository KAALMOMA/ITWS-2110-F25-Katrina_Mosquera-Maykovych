# Lab06 - README.md

## Notes / Clarifications
In the Lab #6 Handout, it says "_Answer any questions in the PHP file provided_". I took this to mean that if there are any questions present in the `lab6start.php` file directly, in the form of comments or otherwise, answer them there. As for the rest of the questions in the Handout (3 total), I answer them here. \
Furthermore, I do not explain the functionality of any classes or methods beyond those I was directly responsible for writing.

## Questions
### 1) Explain what each of your classes and methods does, the order in which methods are invoked, and the flow of execution after one of the operation buttons has been clicked.

With respect to each of the new classes and methods I implemented, their functionality is described below.

### Classes & Methods
**Subtraction** - The Subtraction class is a subclass of the Operation class (i.e., it extends Operation, an abstract class). In addition to the functionality inherited from Operation (basic type checking for the operands and passing operand values to member variables), Subtraction implements `operate()`, returning `operand_1 - operand_2`. Furthermore, Subtraction also implements `getEquation()`, which simply returns a string of the form `"operand_1 - operand_2 = difference"` by concatenating the operand values with the appropriate math symbols.

**Multiplication** - The Multiplication class is a subclass of the Operation class. In addition to the functionality inherited from Operation, Multiplication implements `operate()`, returning `operand_1 * operand_2`. Furthermore, Multiplication also implements `getEquation()`, which simply returns a string of the form `"operand_1 * operand_2 = product"` by concatenating the operand values with the appropriate math symbols.

**Division** - The Division class is a subclass of the Operation class. In addition to the functionality inherited from Operation, Division implements `operate()`, returning `operand_1 / operand_2`. Furthermore, Division also implements `getEquation()`, which simply returns a string of the form `"operand_1 / operand_2 = quotient"` by concatenating the operand values with the appropriate math symbols.

### Order of Invocation
For each of the above classes, the order of invocation is identical.\
When the user enters two numbers into the text input fields, and selects an operation button, the form sends those values via `POST` to the same page. PHP checks which button was pressed and uses the corresponding subclass (Addition, Subtraction, Multiplication, or Division) to create an `Operation` object with the given operands. The parent constructor validates that both operands are numeric and stores them. Then the script calls the subclass’s `getEquation()` method, which calls `operate()` to perform the calculation and returns a formatted equation string accordingly. If the input is invalid, an exception is caught and displayed as an error.

### 1) Also explain how the application would differ if you were to use `$_GET`, and why this may or may not be preferable.

Since `$_GET`'s functionality is slightly different than that of `$_POST` (`$_GET` collects data sent to the server via GET method, often through URL parameters), the application would differ not only in how it is implemented, but (more importantly) in how the user can interact with it.\
While using `$_GET` would maintain the functionality of the original application as it was (i.e., the user still provides 2 valid inputs, selects an operation, and the site produces an equation that represents the output), all of the information pertaining to the specific equation that the user has created (the operands, the operation) will be appended to the URL as query parameters.\
In the context of a simple calculator application, this may be rather useful, as it allows the user to share the URL to their specific equation with other individuals, as `$_GET` will also read in query parameters directly from the URL, reproducing their equation. Furthermore, this means that the user can also use the calculator directly through manipulating the query parameters in the URL, giving them an alternative way to calculate the final equation without necessarily having to interact with the HTML form directly.\
On the other hand, if we were handling more sensitive information (e.g. username and password for the purposes of authentication), using `$_GET` would be ill-advised.

### 3) Finally, Please explain whether or not there might be another (better +/-) way to determine which button has been pressed and take the appropriate action.

There is, indeed, a better way to determine which button has been pressed and take the appropriate action.

First, in the HTML, we can change all of the `submit` input elements (i.e., the buttons), and assign them all the same name: `operation`.

In conjunction with a switch statement (outlined in my answer to Part 2, in `lab6start.php`) this would allow us to much more easily reference the operation being called, by circumventing the need to individually check if each of the `$_POST` variables `(add, sub, mult, div)` are set.

We can just have one large if-statement that checks `if (isset($_POST['operation']))`, and have this wrap our switch statement:
```php
if (isset($_POST['operation'])) {
    switch ($_POST['operation']) {
        case 'Add':
            $op = new Addition($o1, $o2);
            break;
        case 'Subtract':
        ...
    }
}
```