#!/usr/bin/env node
import { runPublicPackTool } from './dho-pack-tool-bundle.mjs';
await runPublicPackTool('build', process.argv.slice(2));
