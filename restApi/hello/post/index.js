'use strict';

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('With context:', JSON.stringify(context, null, 2));

    let id = event.pathParameters.id;
    let body = JSON.parse(event.body);

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let res = `${process.env.PREFIX_MESSAGE} ${id} ${body.message}`;
    done(null, res);
};
