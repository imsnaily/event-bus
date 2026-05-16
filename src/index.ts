type Handler = (...args: unknown[]) => void;

interface Connection {
	Disconnect(): void;
}

const listeners = new Map<string, Set<Handler>>();

export const EventBus = {
	emit(event: string, ...args: unknown[]): void {
		const handlers = listeners.get(event);
		if (!handlers) return;

		for (const handler of handlers) {
			handler(...args);
		}
	},

	connect(event: string, handler: Handler): Connection {
		if (!listeners.has(event)) {
			listeners.set(event, new Set());
		}

		listeners.get(event)!.add(handler);

		return {
			Disconnect() {
				listeners.get(event)?.delete(handler);
			},
		};
	},
};
