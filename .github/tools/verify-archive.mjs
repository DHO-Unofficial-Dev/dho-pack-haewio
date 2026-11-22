#!/usr/bin/env node
import { runPublicPackTool } from './dho-pack-tool-bundle.mjs';
await runPublicPackTool('verify', process.argv.slice(2));
