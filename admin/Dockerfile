FROM node:18.15.0 AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV VITE_BASE_URL="http://192.168.3.62:3000"
ENV VITE_SITE_KEY="6LdcFjgpAAAAALJKbSk3KEcMHFGPiBzrHylV22Hz"

RUN corepack enable

COPY . .

RUN printenv

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run build

FROM nginx

COPY --from=build dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]