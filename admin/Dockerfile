ARG vite_base_url
ARG vite_site_key

FROM node:18.15.0 AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV VITE_BASE_URL=$vite_base_url
ENV VITE_SITE_KEY=$vite_site_key

RUN corepack enable

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run build

FROM nginx

COPY --from=build dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]