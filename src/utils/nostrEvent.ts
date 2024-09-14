import { EventTemplate, finalizeEvent, NostrEvent } from 'nostr-tools';

async function makeEvent(
    dTagValue: string,
    content: string,
    privateKey: Uint8Array
): Promise<NostrEvent> {
    try {
        const unsignedEvent: EventTemplate = {
            kind: 30021,
            tags: [['d', dTagValue]],
            content: JSON.stringify(content),
            created_at: Math.round(Date.now() / 1000),
        };

        const signedEvent: NostrEvent = finalizeEvent(
            unsignedEvent,
            privateKey
        );

        return signedEvent;
    } catch (error) {
        console.log('Error in makeEvent.ts: ' + error);
        throw error;
    }
}

export { makeEvent };
