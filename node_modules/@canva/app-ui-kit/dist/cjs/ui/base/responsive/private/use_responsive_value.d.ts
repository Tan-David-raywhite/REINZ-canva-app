import { Breakpoint } from '../../metrics/metrics';
import type { RequiredResponsiveObject } from './responsive';
export declare function useResponsiveValue<V>(value: RequiredResponsiveObject<V>): V;
export declare function useBreakpoint(): Breakpoint;
