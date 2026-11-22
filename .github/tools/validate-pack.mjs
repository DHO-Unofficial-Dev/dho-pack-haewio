#!/usr/bin/env node
import { runPublicPackTool } from './dho-pack-tool-bundle.mjs';
await runPublicPackTool('validate', process.argv.slice(2));
