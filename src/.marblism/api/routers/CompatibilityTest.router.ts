/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.CompatibilityTestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).compatibilityTest.create(input as any))),

        delete: procedure.input($Schema.CompatibilityTestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).compatibilityTest.delete(input as any))),

        findFirst: procedure.input($Schema.CompatibilityTestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).compatibilityTest.findFirst(input as any))),

        findMany: procedure.input($Schema.CompatibilityTestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).compatibilityTest.findMany(input as any))),

        findUnique: procedure.input($Schema.CompatibilityTestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).compatibilityTest.findUnique(input as any))),

        update: procedure.input($Schema.CompatibilityTestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).compatibilityTest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.CompatibilityTestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompatibilityTestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompatibilityTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompatibilityTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompatibilityTestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompatibilityTestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompatibilityTestGetPayload<T>, Context>) => Promise<Prisma.CompatibilityTestGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CompatibilityTestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompatibilityTestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompatibilityTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompatibilityTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompatibilityTestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompatibilityTestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompatibilityTestGetPayload<T>, Context>) => Promise<Prisma.CompatibilityTestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CompatibilityTestFindFirstArgs, TData = Prisma.CompatibilityTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CompatibilityTestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CompatibilityTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompatibilityTestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CompatibilityTestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CompatibilityTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CompatibilityTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CompatibilityTestFindManyArgs, TData = Array<Prisma.CompatibilityTestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CompatibilityTestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CompatibilityTestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompatibilityTestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CompatibilityTestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CompatibilityTestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CompatibilityTestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CompatibilityTestFindUniqueArgs, TData = Prisma.CompatibilityTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CompatibilityTestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CompatibilityTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CompatibilityTestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CompatibilityTestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CompatibilityTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CompatibilityTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.CompatibilityTestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CompatibilityTestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CompatibilityTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CompatibilityTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CompatibilityTestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CompatibilityTestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CompatibilityTestGetPayload<T>, Context>) => Promise<Prisma.CompatibilityTestGetPayload<T>>
            };

    };
}
