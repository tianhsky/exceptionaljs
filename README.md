# exceptionaljs

JavaScript error handler to monitor client JS exceptions, client code only, for backend choose your desired framework and database.

## Requirements

- jQuery
- boswer

		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="https://raw.githubusercontent.com/ded/bowser/master/bowser.min.js"></script>

## How to use

		exceptionaljs_path = "/js_errors"; // path to post error details, be wary of "same origin polocy"
		<script src="/path_to/exceptionaljs.min.js"></script>