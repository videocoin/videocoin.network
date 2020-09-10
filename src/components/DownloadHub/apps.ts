const apps = [
  {
    id: 'workerHub',
    name: 'Worker Hub',
    description:
      'The VideoCoin Network worker app is an easy to run desktop application that makes setting up a worker node on the VideoCoin Network and directly staking VID to the worker a simple guided process.',
    versions: [
      {
        id: 1,
        version: '1.0.0',
        description:
          'The VideoCoin Network Worker Hub initial release is built to simplify worker setup on Windows and Mac platforms.',
        links: [
          {
            icon: 'windows',
            name: 'Windows',
            url: 'https://workerhub.videocoin.net/download/latest/windows_64',
          },
          {
            icon: 'apple',
            name: 'Mac',
            url: 'https://workerhub.videocoin.net/download/latest/osx',
          },
        ],
      },
    ],
  },
  {
    id: 'workerDockerTools',
    name: 'Worker Docker Tools',
    description:
      'The Worker Docker Tools allow you to run a VideoCoin worker in any docker supported environment. This setup is more complex than the Worker App, but offers more control and flexibility for how your worker runs. See our documentation for information on how to get the worker up and running.',
    versions: [
      {
        id: 1,
        version: '1.1.0',
        description: 'No change notes for this release',
        links: [
          {
            icon: 'dockerHub',
            name: 'Docker Hub',
            url: 'https://hub.docker.com/r/videocoinnetwork/worker',
          },
        ],
      },
    ],
  },
  {
    id: 'workerBinaries',
    name: 'Worker Binaries',
    description:
      'Setup a worker with a Raspberry Pi or Jetson Nano using binaries. See our documentation for information on how to get these binaries setup and running.',
    versions: [
      {
        id: 1,
        version: '1.1.1',
        description: 'No change notes for this release',
        links: [
          {
            name: 'Raspberry Pi',
            url:
              'https://storage.googleapis.com/videocoin-releases/worker/v1.1.1-pe-1-6107bcc/worker-linux-arm',
          },
          {
            name: 'Jetson Nano',
            url:
              'https://storage.googleapis.com/videocoin-releases/worker/v1.1.1-pe-1-6107bcc/worker-linux-arm64',
          },
        ],
      },
    ],
  },
  {
    id: 'directStakingTools',
    name: 'Direct Staking Tools',
    description:
      'The direct staking tool helps workers stake VID directly to their own worker node in order to meet the minimum required stake to launch a worker node. See documentation for details on how to use the tool.',
    versions: [
      {
        id: 1,
        version: '1.1.0',
        description: 'No change notes for this release',
        links: [
          {
            icon: 'dockerHub',
            name: 'Docker Hub',
            url: 'https://hub.docker.com/r/videocoinnetwork/staker',
          },
        ],
      },
    ],
  },
  {
    id: 'stakingPoolOperatorTools',
    name: 'Staking Pool Operator Tools',
    description:
      'Easily get a delegated staking pool setup and running using our Staking Pool Operator Tools to manage automatic payouts to your third party delegates.',
    versions: [
      {
        id: 1,
        version: 'v0.2.3-6-g870a832',
        description: 'No change notes for this release',
        links: [
          {
            icon: 'dockerHub',
            name: 'Docker Hub',
            url: 'https://hub.docker.com/r/videocoinnetwork/vidpool',
          },
        ],
      },
    ],
  },
  {
    id: 'orbital',
    name: 'Orbital Video Streaming Apps',
    description:
      'The source code for the Orbital streaming apps. Orbital is a sample app built on the VideoCoin Network. Developers can use this code to start building their own VideoCoin Network integrated streaming apps. Pick your platform below to dive into the source code.',
    versions: [
      {
        id: 1,
        version: '1.0.0',
        description:
          'All orbital apps on Android, iOS, and Web have been released as open source samples on Github.',
        links: [
          {
            icon: 'web',
            name: 'Web',
            url: 'https://github.com/videocoin/orbital-webapp',
          },
          {
            icon: 'apple',
            name: 'iOS',
            url: 'https://github.com/videocoin/orbital-ios',
          },
          {
            icon: 'android',
            name: 'Android',
            url: 'https://github.com/videocoin/orbital-android',
          },
        ],
      },
    ],
  },
];

export default apps;
