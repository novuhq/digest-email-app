import { Novu } from "@novu/node";

export const sendEmailDigest = async (notif, email) => {
    const novu = new Novu(process.env.YOUR_NOVU_API_KEY);
    await novu.subscribers.identify('digestEmailSub', {
        firstName: "digest email subscriber",
        email: email
    });

    novu.trigger('emaildigestworkflow', {
        to: {
            subscriberId: 'digestEmailSub',
            email: email
        },
        payload: {
            notif: notif,
        },
    });
}