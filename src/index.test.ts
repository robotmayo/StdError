import test from "ava";
import StdError from ".";

test("stderr", t => {
  const err: StdError = t.throws(function() {
    throw new StdError("Test message", "ERR_TEST", { ip: 33 });
  }, StdError);
  t.is(err.message, "Test message");
  t.is(err.code, "ERR_TEST");
  t.deepEqual(err.context, { ip: 33 });
});
