import * as a11yAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as previewAnnotations from './preview';

// The a11y annotations are what actually run axe during the test suite — without
// them the `a11y.test` parameter is inert. Preview annotations come second so the
// theme decorator and globals match the Storybook UI.
const project = setProjectAnnotations([a11yAnnotations, previewAnnotations]);

beforeAll(project.beforeAll);
