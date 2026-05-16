# @snailycfx/event-bus

Lightweight event bus for roblox-ts enabling decoupled same-side script communication.

## Installation

```bash
npm install @snailycfx/event-bus
```

## Usage

```ts
import { EventBus } from '@snailycfx/event-bus';

// Emit an event
EventBus.emit('onRunStarted', runId, timestamp);

// Listen to an event
const connection = EventBus.connect('onRunStarted', (runId: string, timestamp: number) => {
    print('run started');
});

// Cleanup
connection.Disconnect();
```

## API

### `EventBus.emit(event, ...args)`

Fires an event and passes the arguments to all registered listeners.

| Parameter | Type     | Description        |
|-----------|----------|--------------------|
| `event`   | `string` | Event name         |
| `...args` | `any[]`  | Arguments to pass  |

### `EventBus.connect(event, handler)`

Registers a listener for the given event. Returns a `Connection` object.

| Parameter | Type       | Description              |
|-----------|------------|--------------------------|
| `event`   | `string`   | Event name               |
| `handler` | `Function` | Callback to invoke       |

```ts
interface Connection {
    Disconnect(): void;
}
```

## License

MIT
