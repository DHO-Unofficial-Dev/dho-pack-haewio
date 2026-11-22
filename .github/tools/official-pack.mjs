#!/usr/bin/env node
import { runPublicPackTool } from './dho-pack-tool-bundle.mjs';
await runPublicPackTool('official', process.argv.slice(2));
