import { sendEmailDigest } from "../novu/novu.js";

export const getEmailDigest = async (req, res) => {
    const { notif, email } = req.body
    try {
        await sendEmailDigest(notif, email);
        res.status(201).json({ message: 'success', notif: notif });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}