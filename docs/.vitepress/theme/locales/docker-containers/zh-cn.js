export default {
  architecture: {
    title: '虚拟机 vs 容器',
    subtitle: '点击切换查看两种虚拟化方式的架构差异',
    tabs: [
      { key: 'vm', label: '虚拟机' },
      { key: 'container', label: '容器' }
    ],
    layers: {
      vm: [
        {
          label: '应用 A / 应用 B / 应用 C',
          type: 'app',
          items: ['App A + Bins/Libs', 'App B + Bins/Libs', 'App C + Bins/Libs']
        },
        {
          label: '客户操作系统（Guest OS）',
          type: 'os',
          items: ['Ubuntu', 'CentOS', 'Debian']
        },
        { label: 'Hypervisor（VMware / KVM）', type: 'hypervisor' },
        { label: '宿主操作系统（Host OS）', type: 'host' },
        { label: '物理硬件', type: 'hardware' }
      ],
      container: [
        {
          label: '应用 A / 应用 B / 应用 C',
          type: 'app',
          items: ['App A + Bins/Libs', 'App B + Bins/Libs', 'App C + Bins/Libs']
        },
        { label: 'Docker Engine', type: 'docker' },
        { label: '宿主操作系统（Host OS）', type: 'host' },
        { label: '物理硬件', type: 'hardware' }
      ]
    },
    info: {
      vm: [
        { label: '启动速度', value: '分钟级', highlight: false },
        {
          label: '资源占用',
          value: '每个 VM 需要完整 OS（GB 级）',
          highlight: false
        },
        { label: '隔离性', value: '强（硬件级隔离）', highlight: true },
        { label: '密度', value: '单机通常 10-20 个 VM', highlight: false },
        { label: '镜像大小', value: 'GB 级', highlight: false }
      ],
      container: [
        { label: '启动速度', value: '秒级', highlight: true },
        {
          label: '资源占用',
          value: '共享宿主 OS 内核（MB 级）',
          highlight: true
        },
        { label: '隔离性', value: '较强（进程级隔离）', highlight: false },
        { label: '密度', value: '单机可运行数百个容器', highlight: true },
        { label: '镜像大小', value: 'MB 级', highlight: true }
      ]
    }
  },
  lifecycle: {
    title: 'Docker 生命周期',
    subtitle: '点击每个阶段查看详细说明',
    commandLabel: '常用命令',
    stages: [
      {
        key: 'write',
        name: '编写 Dockerfile',
        icon: '📝',
        desc: 'Dockerfile 是构建镜像的"配方"，定义了从基础镜像开始，如何一步步构建出你的应用环境。每条指令创建一个镜像层（Layer），Docker 会缓存这些层以加速后续构建。',
        commands: [
          { cmd: 'FROM node:18-alpine', desc: '指定基础镜像' },
          { cmd: 'WORKDIR /app', desc: '设置工作目录' },
          { cmd: 'COPY package*.json ./', desc: '复制依赖文件（利用缓存）' },
          { cmd: 'RUN npm install', desc: '安装依赖' },
          { cmd: 'COPY . .', desc: '复制应用代码' },
          { cmd: 'EXPOSE 3000', desc: '声明端口' },
          { cmd: 'CMD ["node", "server.js"]', desc: '启动命令' }
        ]
      },
      {
        key: 'build',
        name: '构建镜像',
        icon: '🔨',
        desc: 'docker build 命令读取 Dockerfile，逐层执行指令，最终生成一个不可变的镜像（Image）。镜像是只读的模板，包含运行应用所需的一切：代码、运行时、库、环境变量。',
        commands: [
          { cmd: 'docker build -t myapp:1.0 .', desc: '构建并打标签' },
          { cmd: 'docker images', desc: '查看本地镜像列表' },
          { cmd: 'docker image prune', desc: '清理无用镜像' }
        ]
      },
      {
        key: 'push',
        name: '推送仓库',
        icon: '☁️',
        desc: '将构建好的镜像推送到镜像仓库（Registry），如 Docker Hub、阿里云 ACR、AWS ECR。团队成员和部署环境可以从仓库拉取镜像，实现"一次构建，到处运行"。',
        commands: [
          {
            cmd: 'docker tag myapp:1.0 registry/myapp:1.0',
            desc: '给镜像打远程标签'
          },
          { cmd: 'docker push registry/myapp:1.0', desc: '推送到仓库' },
          { cmd: 'docker pull registry/myapp:1.0', desc: '从仓库拉取' }
        ]
      },
      {
        key: 'run',
        name: '运行容器',
        icon: '▶️',
        desc: '容器是镜像的运行实例。一个镜像可以启动多个容器，每个容器有独立的文件系统、网络和进程空间。容器是轻量级的，启动只需秒级。',
        commands: [
          {
            cmd: 'docker run -d -p 3000:3000 myapp:1.0',
            desc: '后台运行并映射端口'
          },
          { cmd: 'docker ps', desc: '查看运行中的容器' },
          { cmd: 'docker logs <container>', desc: '查看容器日志' },
          { cmd: 'docker exec -it <container> sh', desc: '进入容器终端' }
        ]
      },
      {
        key: 'manage',
        name: '管理容器',
        icon: '⚙️',
        desc: '容器运行后需要监控、停止、重启或删除。Docker Compose 可以管理多个容器的编排，定义服务间的依赖关系和网络。',
        commands: [
          { cmd: 'docker stop <container>', desc: '停止容器' },
          { cmd: 'docker restart <container>', desc: '重启容器' },
          { cmd: 'docker rm <container>', desc: '删除容器' },
          { cmd: 'docker compose up -d', desc: '用 Compose 启动多服务' }
        ]
      }
    ]
  }
}
