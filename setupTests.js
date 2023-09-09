import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';
import { setGlobal } from 'reactn';

configure({ testIdAttribute: 'data-test-id' });