
/* one possibility to test */
describe('Given our check function for valid email addresses', function() {

    describe('when an email text is entered,', function () {

        it('it should not be empty',
            function() {
                expect(BasicEmail.basic.emailOK("").isOK).toBeFalsy();

            }
        );

        it('it should be a valid email address',
            function () {
                expect(BasicEmail.basic.emailOK("john@john.de").isOK).toBeTruthy();

                expect(BasicEmail.basic.emailOK("johnhn.de").isOK).toBeFalsy();

            }
        );
        it('it should return warning/message when the email address is too short',
            function () {
                expect(BasicEmail.basic.emailOK("j@j.com").message).not.toEqual("");

            }
        );

        it('should let the user know that the validation of the email address was ok',
            function () {
                expect(BasicEmail.basic.emailOK("jrrtg@juzr.com").message).not.toEqual("");

            }
        );
        it("different states should provide the user different info messages",
            function() {
                expect(BasicEmail.basic.emailOK("jrrtg@juzr.com").message).not.toEqual(
                    BasicEmail.basic.emailOK("j@j.com").message)
        });

    });
});

/* another way to approach this */
