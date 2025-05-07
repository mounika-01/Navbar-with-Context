/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'
import ThemeContext from '../../context/ThemeContext'

configure({testIdAttribute: 'data-testid'})
