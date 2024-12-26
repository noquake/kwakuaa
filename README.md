# Kwaku AA

This repo holds the source-code for my portfolio website built using HTML, JavaScript, and CSS. The site is currently hosted using Github-Pages, a free webhosting feature on Github and Gitlab. Using Cloudflare to proxy my custom domain, [kwaku-agyei.org](kwaku-agyei.org), to the one originally provided via Github Pages. 

To host on Github Pages, it is required to deploy directly from a branch unless using a custom deployment action. Since I don't know how to do the latter yet, the branch "pages" is devoted to hosting the site code, while the main branch is being developed. 


## Installation

Currently, my project can only be run via Docker. Feel free to clone the repo or download the zip to make your own version as well.

### Docker

Visit the [DockerHub](https://hub.docker.com/repository/docker/kwaagyei/kwakuaa/general) repo to get the latest stable image or just follow along with the instructions.

Also, you'll need to have docker installed and make sure you don't have any containers running on port 80 since this image uses nginx as a base.

First pull an image

```bash
  docker pull kwaagyei/kwakuaa:0.9.9
```
Then, create and run a container on port 9000 from the image pulled named 'kwakuaa'
```bash
docker run -d -p 9000:80 --name kwakuaa:0.9.9
```
Use `docker ps` to check the status of your containers or `docker logs kwakuaa` to see more verbose feedback

Visit `http://localhost:9000/` in any browser to see the project
    
## Objectives
This personal site has served as an introduction to web-hosting, domain configuration, HTML-CSS-JAVACRIPT design, and Github Actions. In the future, I hope for the site to meet the following goals:
- [x] Setup a custom domain
- [ ] A favicon/logo/icon would be cool
- [x] Dockerize the site
- [x] Setup the Timeline
- [ ] Setup the web-based Terminal

- [ ] Secure via SSL/TLS
- [ ] Run on a container within Atlantiq
- [ ] Setup Nginx reverse proxy manager to route from LAN to WAN
- [ ] Setup some kind of firewall
## Tech

**Client:** HTML, CSS, & JAVASCRIPT

**Server:** [Docker](https://docs.docker.com/), [RancherOS (VM)](https://rancher.com/docs/os/v1.x/en/), [Proxmox VE](https://pve.proxmox.com/pve-docs/pve-admin-guide.htm), [Nginx Proxy Manager](https://nginxproxymanager.com/), [Cloudflare](https://dash.cloudflare.com)
