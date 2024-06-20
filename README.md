# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.


### Running With Nginx
This simulates the behaviour with our reverse proxy servers on dev and prod 

Open WSL and execute the `init.sh` script this will install docker and nginx into wsl. Also applies the Nginx configuration in the file `default`.

After that execute `buildAndDeploy.sh`, this would build the container and deploy application on the port `6003`

The application would be accessible through http://localhost:6003.

To access application through nginx http://localhost:81/visits-alpha.