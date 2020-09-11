# My Resume

![Continuous Deployment](https://github.com/nirgn975/resume/workflows/Continuous%20Deployment/badge.svg)

My Resume (CV) website.
The project build with Hugo and UIkit.

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
