export default {
  architecture: {
    title: 'Virtual Machines vs Containers',
    subtitle:
      'Switch between both virtualization models to compare their architecture',
    tabs: [
      { key: 'vm', label: 'Virtual machine' },
      { key: 'container', label: 'Container' }
    ],
    layers: {
      vm: [
        {
          label: 'App A / App B / App C',
          type: 'app',
          items: ['App A + Bins/Libs', 'App B + Bins/Libs', 'App C + Bins/Libs']
        },
        {
          label: 'Guest OS',
          type: 'os',
          items: ['Ubuntu', 'CentOS', 'Debian']
        },
        { label: 'Hypervisor (VMware / KVM)', type: 'hypervisor' },
        { label: 'Host OS', type: 'host' },
        { label: 'Physical hardware', type: 'hardware' }
      ],
      container: [
        {
          label: 'App A / App B / App C',
          type: 'app',
          items: ['App A + Bins/Libs', 'App B + Bins/Libs', 'App C + Bins/Libs']
        },
        { label: 'Docker Engine', type: 'docker' },
        { label: 'Host OS', type: 'host' },
        { label: 'Physical hardware', type: 'hardware' }
      ]
    },
    info: {
      vm: [
        { label: 'Startup speed', value: 'Minutes', highlight: false },
        {
          label: 'Resource usage',
          value: 'Each VM needs a full OS (GB scale)',
          highlight: false
        },
        {
          label: 'Isolation',
          value: 'Strong hardware-level isolation',
          highlight: true
        },
        {
          label: 'Density',
          value: 'Usually 10-20 VMs per host',
          highlight: false
        },
        { label: 'Image size', value: 'GB scale', highlight: false }
      ],
      container: [
        { label: 'Startup speed', value: 'Seconds', highlight: true },
        {
          label: 'Resource usage',
          value: 'Shared host OS kernel (MB scale)',
          highlight: true
        },
        {
          label: 'Isolation',
          value: 'Process-level isolation',
          highlight: false
        },
        {
          label: 'Density',
          value: 'Hundreds of containers per host',
          highlight: true
        },
        { label: 'Image size', value: 'MB scale', highlight: true }
      ]
    }
  },
  lifecycle: {
    title: 'Docker Lifecycle',
    subtitle: 'Click each stage to inspect the details',
    commandLabel: 'Common commands',
    stages: [
      {
        key: 'write',
        name: 'Write a Dockerfile',
        icon: '📝',
        desc: 'A Dockerfile is the recipe for building an image. It starts from a base image and defines how to assemble the application environment step by step. Each instruction creates an image layer that Docker can cache for later builds.',
        commands: [
          { cmd: 'FROM node:18-alpine', desc: 'Choose the base image' },
          { cmd: 'WORKDIR /app', desc: 'Set the working directory' },
          {
            cmd: 'COPY package*.json ./',
            desc: 'Copy dependency files for cache reuse'
          },
          { cmd: 'RUN npm install', desc: 'Install dependencies' },
          { cmd: 'COPY . .', desc: 'Copy application code' },
          { cmd: 'EXPOSE 3000', desc: 'Declare the port' },
          { cmd: 'CMD ["node", "server.js"]', desc: 'Start command' }
        ]
      },
      {
        key: 'build',
        name: 'Build the image',
        icon: '🔨',
        desc: 'docker build reads the Dockerfile, executes instructions layer by layer, and produces an immutable image. The image is a read-only template containing the code, runtime, libraries, and environment variables needed to run the app.',
        commands: [
          {
            cmd: 'docker build -t myapp:1.0 .',
            desc: 'Build and tag the image'
          },
          { cmd: 'docker images', desc: 'List local images' },
          { cmd: 'docker image prune', desc: 'Clean unused images' }
        ]
      },
      {
        key: 'push',
        name: 'Push to registry',
        icon: '☁️',
        desc: 'Push the built image to a registry such as Docker Hub, Alibaba Cloud ACR, or AWS ECR. Teammates and deployment environments can pull the same image so it is built once and run anywhere.',
        commands: [
          {
            cmd: 'docker tag myapp:1.0 registry/myapp:1.0',
            desc: 'Add a remote tag'
          },
          {
            cmd: 'docker push registry/myapp:1.0',
            desc: 'Push to the registry'
          },
          {
            cmd: 'docker pull registry/myapp:1.0',
            desc: 'Pull from the registry'
          }
        ]
      },
      {
        key: 'run',
        name: 'Run the container',
        icon: '▶️',
        desc: 'A container is a running instance of an image. One image can start many containers, each with its own filesystem, network, and process space. Containers are lightweight and start in seconds.',
        commands: [
          {
            cmd: 'docker run -d -p 3000:3000 myapp:1.0',
            desc: 'Run in the background and map ports'
          },
          { cmd: 'docker ps', desc: 'List running containers' },
          { cmd: 'docker logs <container>', desc: 'View container logs' },
          {
            cmd: 'docker exec -it <container> sh',
            desc: 'Open a shell inside the container'
          }
        ]
      },
      {
        key: 'manage',
        name: 'Manage containers',
        icon: '⚙️',
        desc: 'After containers are running, they need monitoring, stopping, restarting, and removal. Docker Compose can orchestrate multiple containers and define service dependencies and networks.',
        commands: [
          { cmd: 'docker stop <container>', desc: 'Stop a container' },
          { cmd: 'docker restart <container>', desc: 'Restart a container' },
          { cmd: 'docker rm <container>', desc: 'Remove a container' },
          {
            cmd: 'docker compose up -d',
            desc: 'Start multiple services with Compose'
          }
        ]
      }
    ]
  }
}
