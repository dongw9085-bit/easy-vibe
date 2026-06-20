export default {
  architecture: {
    title: 'Kubernetes Architecture',
    subtitle: 'Click a component to inspect the details',
    controlPlaneTitle: 'Control Plane',
    workerNodeTitle: 'Worker Node x N',
    analogyLabel: 'Analogy:',
    controlPlane: [
      {
        key: 'api-server',
        name: 'API Server',
        desc: 'The front door of Kubernetes. All operations from kubectl, dashboards, and internal components go through the API Server. It handles authentication, authorization, admission control, and acts as the single entry point for the cluster.',
        analogy:
          'A company reception desk where every visitor and delivery is checked in'
      },
      {
        key: 'etcd',
        name: 'etcd',
        desc: 'A distributed key-value store that keeps all cluster state: Pod data, Service configuration, Secrets, and more. It is the cluster memory; losing etcd data means losing the cluster state.',
        analogy:
          'A records room that stores employee information and company rules'
      },
      {
        key: 'scheduler',
        name: 'Scheduler',
        desc: 'Assigns newly created Pods to suitable nodes. It considers resource requests, affinity rules, taints, tolerations, and other constraints before making a scheduling decision.',
        analogy: 'An HR team assigning new employees to the right departments'
      },
      {
        key: 'controller',
        name: 'Controller Manager',
        desc: 'Runs controllers such as Deployment, ReplicaSet, and Job controllers. It continuously watches cluster state and reconciles actual state with desired state. If a Pod fails, the controller recreates it.',
        analogy: 'Department managers keeping staffing aligned with the plan'
      }
    ],
    workerNode: [
      {
        key: 'kubelet',
        name: 'kubelet',
        desc: 'The agent on every node. It manages the Pod lifecycle on that node, receives instructions from the API Server, calls the container runtime to create or destroy containers, and reports node status.',
        analogy: 'A team lead at each workstation managing daily work'
      },
      {
        key: 'kube-proxy',
        name: 'kube-proxy',
        desc: 'Implements Service networking rules and forwards Service traffic to matching Pods. It maintains iptables or IPVS rules on the node to provide load balancing.',
        analogy:
          'A company switchboard routing external calls to the right extension'
      },
      {
        key: 'runtime',
        name: 'Container runtime',
        desc: 'The component that actually runs containers, such as containerd or CRI-O. kubelet talks to it through the CRI to pull images, create containers, and manage containers.',
        analogy:
          'Workers carrying out concrete production tasks from instructions'
      }
    ]
  },
  workloads: {
    title: 'K8s Core Resources',
    subtitle:
      'Click a resource type to inspect the explanation and YAML example',
    yamlLabel: 'YAML example',
    tipLabel: 'Tip:',
    resources: [
      {
        key: 'pod',
        name: 'Pod',
        category: 'Smallest scheduling unit',
        desc: 'A Pod is the smallest deployable unit in K8s. It contains one or more tightly related containers. Containers inside the same Pod share networking and storage, so they can communicate through localhost.',
        yaml: `apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: app
      image: my-app:1.0
      ports:
        - containerPort: 3000`,
        tips: 'Production workloads rarely create Pods directly; they are usually managed by Deployments.'
      },
      {
        key: 'deployment',
        name: 'Deployment',
        category: 'Workload',
        desc: 'A Deployment manages Pod replicas, rolling updates, and rollbacks. You declare that three replicas should run version 1.0, and the Deployment controller keeps three healthy Pods running.',
        yaml: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:1.0`,
        tips: 'After you update the image version, the Deployment performs a rolling update and gradually replaces old Pods.'
      },
      {
        key: 'service',
        name: 'Service',
        category: 'Networking',
        desc: 'A Service provides a stable access point for a group of Pods. Pod IPs can change, but the Service ClusterIP and DNS name stay stable. It finds matching Pods through label selectors and load balances traffic.',
        yaml: `apiVersion: v1
kind: Service
metadata:
  name: my-app-svc
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP`,
        tips: 'ClusterIP, NodePort, and LoadBalancer are the three common Service types.'
      },
      {
        key: 'configmap',
        name: 'ConfigMap',
        category: 'Configuration',
        desc: 'A ConfigMap stores non-sensitive configuration such as database addresses and feature flags. It can be mounted into Pods as environment variables or files, allowing configuration updates without rebuilding the image.',
        yaml: `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: "db.example.com"
  LOG_LEVEL: "info"`,
        tips: 'Sensitive data such as passwords and keys should use Secrets instead of ConfigMaps.'
      },
      {
        key: 'ingress',
        name: 'Ingress',
        category: 'Networking',
        desc: 'Ingress manages external HTTP and HTTPS entry points for the cluster. It supports host-based and path-based routing and usually works with an Ingress Controller such as Nginx Ingress Controller.',
        yaml: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app-svc
                port:
                  number: 80`,
        tips: 'Ingress needs an Ingress Controller to work; by itself it only declares routing rules.'
      }
    ]
  }
}
