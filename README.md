# My Resume

![Continuous Deployment](https://github.com/nirgn975/resume/workflows/Continuous%20Deployment/badge.svg) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/nirgn975/resume)](https://github.com/nirgn975/resume/releases) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

My Resume (CV) website.

The project build with Hugo and uses [devRes theme](https://github.com/nirgn975/devRes).

## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Hugo](https://gohugo.io) - `$ brew install hugo`
2. [Firebase CLI](https://github.com/firebase/firebase-tools)

## Development

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `hugo server -D`.

## Deployment

First you need firebase

```bash
$ npm install -g firebase-tools
```

Then easily deploy the blog

```bash
$ export HUGO_ENV=production
$ hugo && firebase deploy
```
