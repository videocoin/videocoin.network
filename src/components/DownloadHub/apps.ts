const apps = [
  // {
  //   id: 'workerApp',
  //   name: 'Worker App',
  //   description:
  //     'The VideoCoin Network worker app is an easy to run desktop application that makes setting up a worker node on the VideoCoin Network and directly staking VID to the worker a simple guided process.',
  //   versions: [
  //     {
  //       id: 1,
  //       version: '1.0.0',
  //       description:
  //         'VideoCoin Network Worker App initial release. All new desktop application built to simplify setting up a worker node on the VideoCoin Network.',
  //       links: [
  //         {
  //           icon: 'windows',
  //           name: 'Windows',
  //           url: '',
  //         },
  //         {
  //           icon: 'apple',
  //           name: 'Mac',
  //           url: '',
  //         },
  //         {
  //           icon: 'linux',
  //           name: 'Linux',
  //           url: '',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 'workerDockerTools',
    name: 'Worker Docker Tools',
    description:
      'The Worker Docker Images allow you to run a VideoCoin worker in any docker supported environment. While this setup is more complex than using the Worker App, it gives far more control and flexibility for how your worker runs. See our documentation for information on how to get the worker up and running.',
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
      'Worker binaries are available for both the Raspberry Pi and Jetson Nano. See our documentation for information on how to get these binaries setup and running.',
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
    name: 'Orbital Example Apps',
    description:
      'Orbital is a sample app built on the VideoCoin Network. Its source code showcases just how easy it is for developers to start using the VideoCoin Network for a video streaming app/project. Pick your platform below to dive into the source code.',
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
