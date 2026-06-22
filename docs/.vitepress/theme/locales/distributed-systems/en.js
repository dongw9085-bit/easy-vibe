export default {
  cap: {
    title: 'CAP Theorem Interactive Demo',
    subtitle: 'Select two properties to inspect the corresponding system type',
    examplesLabel: 'Typical systems: ',
    sacrificeLabel: 'Sacrifices: ',
    hint: 'Select two properties to see the result',
    items: [
      {
        key: 'C',
        letter: 'C',
        name: 'Consistency',
        desc: 'All nodes see the same data'
      },
      {
        key: 'A',
        letter: 'A',
        name: 'Availability',
        desc: 'Every request receives a response'
      },
      {
        key: 'P',
        letter: 'P',
        name: 'Partition tolerance',
        desc: 'The system keeps running during network partitions'
      }
    ],
    combinations: {
      CA: {
        type: 'CA system (gives up partition tolerance)',
        desc: 'When there is no network partition, the system can provide both consistency and availability. In distributed environments, partitions are unavoidable, so pure CA systems are rare in practice.',
        examples: 'Single-node MySQL, PostgreSQL in single-node mode',
        sacrifice:
          'Partition tolerance (P): unavailable during network failures'
      },
      CP: {
        type: 'CP system (gives up availability)',
        desc: 'During a network partition, the system prioritizes consistency and may reject some requests. This fits scenarios where data correctness is critical.',
        examples: 'ZooKeeper, etcd, HBase, MongoDB in strong consistency mode',
        sacrifice:
          'Availability (A): some requests may be rejected or time out during partitions'
      },
      AP: {
        type: 'AP system (gives up strong consistency)',
        desc: 'During a network partition, the system prioritizes availability and allows temporary inconsistency. This fits systems that value uptime and can tolerate short-lived inconsistency.',
        examples: 'Cassandra, DynamoDB, DNS, CDN',
        sacrifice:
          'Strong consistency (C): different nodes may briefly return different data'
      }
    }
  },
  consistency: {
    title: 'Consistency Model Comparison',
    subtitle: 'Click to compare behavior across consistency models',
    tradeoffLabel: 'Trade-off: ',
    models: [
      {
        key: 'strong',
        name: 'Strong consistency',
        desc: 'After a write succeeds, every node immediately returns the newest value, giving an experience like a single-machine database.',
        tradeoff:
          'Higher latency because all nodes must confirm, and lower availability because node failures may block progress.',
        steps: [
          {
            nodes: [
              { name: 'Node A', value: 'v1', status: 'ok' },
              { name: 'Node B', value: 'v1', status: 'ok' },
              { name: 'Node C', value: 'v1', status: 'ok' }
            ],
            desc: 'Initial state: all nodes are consistent'
          },
          {
            nodes: [
              { name: 'Node A', value: 'v2 write', status: 'writing' },
              { name: 'Node B', value: 'syncing...', status: 'syncing' },
              { name: 'Node C', value: 'syncing...', status: 'syncing' }
            ],
            desc: 'The client writes v2 and waits for every node to confirm'
          },
          {
            nodes: [
              { name: 'Node A', value: 'v2', status: 'ok' },
              { name: 'Node B', value: 'v2', status: 'ok' },
              { name: 'Node C', value: 'v2', status: 'ok' }
            ],
            desc: 'Only after all nodes confirm does the write succeed; any node reads v2'
          }
        ]
      },
      {
        key: 'eventual',
        name: 'Eventual consistency',
        desc: 'Writes return before every node syncs. Data will eventually converge, but reads may see old values in the meantime.',
        tradeoff:
          'Lower latency and higher availability, but reads may briefly return stale data.',
        steps: [
          {
            nodes: [
              { name: 'Node A', value: 'v1', status: 'ok' },
              { name: 'Node B', value: 'v1', status: 'ok' },
              { name: 'Node C', value: 'v1', status: 'ok' }
            ],
            desc: 'Initial state'
          },
          {
            nodes: [
              { name: 'Node A', value: 'v2 write', status: 'writing' },
              { name: 'Node B', value: 'v1', status: 'stale' },
              { name: 'Node C', value: 'v1', status: 'stale' }
            ],
            desc: 'After writing to A, the system returns success immediately while B/C still have old values'
          },
          {
            nodes: [
              { name: 'Node A', value: 'v2', status: 'ok' },
              { name: 'Node B', value: 'v2', status: 'ok' },
              { name: 'Node C', value: 'v1 -> v2', status: 'syncing' }
            ],
            desc: 'Background synchronization gradually converges'
          }
        ]
      },
      {
        key: 'causal',
        name: 'Causal consistency',
        desc: 'Operations with causal relationships preserve order, while unrelated operations may be reordered. It sits between strong and eventual consistency.',
        tradeoff:
          'Lower latency than strong consistency and more predictable behavior than eventual consistency.',
        steps: [
          {
            nodes: [
              { name: 'User A', value: 'post: "Hello"', status: 'ok' },
              { name: 'User B', value: 'sees post', status: 'ok' },
              { name: 'User C', value: 'sees post', status: 'ok' }
            ],
            desc: 'User A creates a post'
          },
          {
            nodes: [
              { name: 'User A', value: 'post: "Hello"', status: 'ok' },
              { name: 'User B', value: 'reply: "Hi!"', status: 'writing' },
              { name: 'User C', value: 'sees post', status: 'ok' }
            ],
            desc: "User B replies, which causally depends on A's post"
          },
          {
            nodes: [
              { name: 'User A', value: 'sees reply', status: 'ok' },
              { name: 'User B', value: 'reply: "Hi!"', status: 'ok' },
              { name: 'User C', value: 'sees post before reply', status: 'ok' }
            ],
            desc: 'Everyone sees the post before the reply, preserving causal order'
          }
        ]
      }
    ]
  },
  challenges: {
    title: 'Eight Challenges in Distributed Systems',
    subtitle:
      'Click each challenge to inspect details and mitigation strategies',
    scenarioLabel: 'Scenario: ',
    solutionLabel: 'Mitigation strategies: ',
    items: [
      {
        key: 'network',
        name: 'Unreliable network',
        icon: '🔌',
        desc: 'Nodes communicate over networks that may drop packets, delay messages, or disconnect at any time. This is the fundamental challenge of distributed systems: never assume the network is reliable.',
        scenario:
          'Service A calls service B and receives no response after 3 seconds. Did B miss the request, or did B process it and lose the response? A cannot tell.',
        solutions: [
          'Timeouts and retries with idempotency',
          'Heartbeat checks to detect connection health',
          'Circuit breakers to pause calls after repeated failures'
        ]
      },
      {
        key: 'clock',
        name: 'Clock drift',
        icon: '⏰',
        desc: 'Physical clocks on machines drift slightly, and even NTP only synchronizes to millisecond-level precision. Distributed systems cannot rely on physical clocks to order events.',
        scenario:
          "Node A writes at 10:00:00.001 and node B writes at 10:00:00.002, but B's clock is 5 ms fast, so B actually wrote first.",
        solutions: [
          'Lamport clocks use counters instead of physical time',
          'Vector clocks track causal relationships across nodes',
          'TrueTime uses GPS and atomic clocks to provide bounded uncertainty'
        ]
      },
      {
        key: 'partition',
        name: 'Network partition',
        icon: '✂️',
        desc: 'A network partition means some nodes cannot communicate while each side keeps running. The system must choose between consistency and availability.',
        scenario:
          'A fiber link between data centers A and B is cut. Both sides keep serving traffic, but data starts diverging.',
        solutions: [
          'CP strategy: reject writes during partitions to preserve consistency',
          'AP strategy: accept writes during partitions and merge conflicts later',
          'Quorum writes: succeed once a majority confirms'
        ]
      },
      {
        key: 'consistency',
        name: 'Data consistency',
        icon: '🔄',
        desc: 'How should multiple replicas stay consistent? Strong consistency hurts performance; eventual consistency may return stale data. There is no silver bullet, only trade-offs.',
        scenario:
          'A user changes their avatar on node A, then refreshes and gets routed to node B, where the old avatar is still visible.',
        solutions: [
          'Read your writes by routing post-write reads to the same node',
          'Read repair detects and fixes inconsistency during reads',
          'Anti-entropy protocols compare replicas in the background'
        ]
      },
      {
        key: 'failure',
        name: 'Partial failure',
        icon: '💥',
        desc: 'In distributed systems, some nodes can fail while others keep running. The system must continue operating under partial failure.',
        scenario:
          'In a five-node cluster, two nodes go down. Should the system continue or stop? Is the remaining data complete enough?',
        solutions: [
          'Replicate data so single-node failure does not break availability',
          'Use heartbeat and timeout mechanisms to detect failed nodes',
          'Automatically fail over when a primary fails'
        ]
      },
      {
        key: 'split-brain',
        name: 'Split brain',
        icon: '🧠',
        desc: 'When a network partition splits a cluster, both sides may believe they are the primary and accept writes, causing conflicts.',
        scenario:
          'In a primary-replica architecture, the primary and replica lose network connectivity. The replica thinks the primary failed and promotes itself, leaving two primaries accepting writes.',
        solutions: [
          'Majority elections allow only a majority-backed node to become primary',
          'Fencing tokens cause the storage layer to reject stale primary writes',
          'A quorum or witness node arbitrates the real primary'
        ]
      },
      {
        key: 'ordering',
        name: 'Event ordering',
        icon: '📋',
        desc: 'Events on different nodes have no single global order. Determining what happened first is a fundamental distributed-systems problem.',
        scenario:
          'Two users edit the same document at the same time: node A receives "delete line 3" while node B receives "modify line 3". The final result depends on ordering.',
        solutions: [
          'Total order broadcast makes all nodes process messages in the same order',
          'CRDTs make the data structure merge without conflicts',
          'Operational transformation is used by collaborative editors such as Google Docs'
        ]
      },
      {
        key: 'transaction',
        name: 'Distributed transaction',
        icon: '🔐',
        desc: 'How can operations across multiple nodes remain atomic? Either everything succeeds or everything rolls back, which is much harder than single-node transactions.',
        scenario:
          'An e-commerce order decrements inventory in service A, deducts balance in service B, and creates an order in service C. If balance deduction fails, inventory must roll back.',
        solutions: [
          'Two-phase commit asks every participant whether it can commit, then commits together',
          'Saga uses compensating actions to roll back step by step',
          'TCC reserves resources, then confirms or cancels them'
        ]
      }
    ]
  }
}
