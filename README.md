# BullMQ 5.1.1 OpenHandles

This is a small express app + tests to reproduce the issue with
a pull request in BullMQ https://github.com/taskforcesh/bullmq/pull/2350.

## How to reproduce
Used node 18.17.0.
Install
```
yarn
```

Run the full test suite with 
```
yarn test
```

The test should hang when completed but `--detectOpenHandles` produces nothing
since the problem is inside the `bullmq` library.

You can also speed it up by starting the redis docker manually 
```
yarn test:setup
```

and call the test runner directly
```
yarn test:run
```

This saves some time from having to start and teardown the redis docker during
each test run.
