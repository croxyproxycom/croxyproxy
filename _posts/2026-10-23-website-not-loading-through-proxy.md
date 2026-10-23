---
title: "Why a website does not load through a web proxy"
description: "Common reasons a page loads slowly, looks broken or stays blank through a web proxy, and what to try."
---
Sometimes a page opens fine in your browser but looks broken or stays blank through a web proxy. This is usually one of a few common causes.

## Heavy scripts

Modern sites load many scripts, and some depend on exact addresses or cookies. A proxy rewrites addresses, so a script can fail. Video-heavy sites such as [YouTube]({{ '/youtube-proxy/' | relative_url }}) are the most likely to be affected.

## Sites that block proxies

Some websites and some networks detect proxy traffic and refuse it. If every attempt fails with the same message, that site may simply not allow it.

## Login and security checks

Pages that need a login often run security checks. Logging in through a proxy can look unusual to the site, which may ask for extra verification or block you. We advise against entering passwords on any web proxy.

## What to try

- Reload the page and wait a few seconds.
- Clear your browser cache and try again.
- Paste the direct link of the page instead of the home page.
- Try again later, when the server is less busy.

If you need a page that is blocked on your network, see our [Blockaway page]({{ '/blockaway/' | relative_url }}).
