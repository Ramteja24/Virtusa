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

        create: procedure.input($Schema.HomePageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).homePage.create(input as any))),

        delete: procedure.input($Schema.HomePageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).homePage.delete(input as any))),

        findFirst: procedure.input($Schema.HomePageInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).homePage.findFirst(input as any))),

        findMany: procedure.input($Schema.HomePageInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).homePage.findMany(input as any))),

        findUnique: procedure.input($Schema.HomePageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).homePage.findUnique(input as any))),

        update: procedure.input($Schema.HomePageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).homePage.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.HomePageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HomePageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HomePageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HomePageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HomePageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HomePageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HomePageGetPayload<T>, Context>) => Promise<Prisma.HomePageGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HomePageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HomePageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HomePageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HomePageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HomePageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HomePageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HomePageGetPayload<T>, Context>) => Promise<Prisma.HomePageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HomePageFindFirstArgs, TData = Prisma.HomePageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HomePageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HomePageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HomePageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HomePageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HomePageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HomePageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HomePageFindManyArgs, TData = Array<Prisma.HomePageGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HomePageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HomePageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HomePageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HomePageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HomePageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HomePageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HomePageFindUniqueArgs, TData = Prisma.HomePageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HomePageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HomePageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HomePageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HomePageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HomePageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HomePageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.HomePageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HomePageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HomePageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HomePageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HomePageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HomePageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HomePageGetPayload<T>, Context>) => Promise<Prisma.HomePageGetPayload<T>>
            };

    };
}
