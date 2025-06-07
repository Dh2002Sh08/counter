// import {
//     Cell,
//     Slice,
//     Address,
//     Builder,
//     beginCell,
//     ComputeError,
//     TupleItem,
//     TupleReader,
//     Dictionary,
//     contractAddress,
//     address,
//     ContractProvider,
//     Sender,
//     Contract,
//     ContractABI,
//     ABIType,
//     ABIGetter,
//     ABIReceiver,
//     TupleBuilder,
//     DictionaryValue
// } from '@ton/core';

// export type DataSize = {
//     $$type: 'DataSize';
//     cells: bigint;
//     bits: bigint;
//     refs: bigint;
// }

// export function storeDataSize(src: DataSize) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.cells, 257);
//         b_0.storeInt(src.bits, 257);
//         b_0.storeInt(src.refs, 257);
//     };
// }

// export function loadDataSize(slice: Slice) {
//     const sc_0 = slice;
//     const _cells = sc_0.loadIntBig(257);
//     const _bits = sc_0.loadIntBig(257);
//     const _refs = sc_0.loadIntBig(257);
//     return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
// }

// export function loadTupleDataSize(source: TupleReader) {
//     const _cells = source.readBigNumber();
//     const _bits = source.readBigNumber();
//     const _refs = source.readBigNumber();
//     return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
// }

// export function loadGetterTupleDataSize(source: TupleReader) {
//     const _cells = source.readBigNumber();
//     const _bits = source.readBigNumber();
//     const _refs = source.readBigNumber();
//     return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
// }

// export function storeTupleDataSize(source: DataSize) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.cells);
//     builder.writeNumber(source.bits);
//     builder.writeNumber(source.refs);
//     return builder.build();
// }

// export function dictValueParserDataSize(): DictionaryValue<DataSize> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeDataSize(src)).endCell());
//         },
//         parse: (src) => {
//             return loadDataSize(src.loadRef().beginParse());
//         }
//     }
// }

// export type SignedBundle = {
//     $$type: 'SignedBundle';
//     signature: Buffer;
//     signedData: Slice;
// }

// export function storeSignedBundle(src: SignedBundle) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeBuffer(src.signature);
//         b_0.storeBuilder(src.signedData.asBuilder());
//     };
// }

// export function loadSignedBundle(slice: Slice) {
//     const sc_0 = slice;
//     const _signature = sc_0.loadBuffer(64);
//     const _signedData = sc_0;
//     return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
// }

// export function loadTupleSignedBundle(source: TupleReader) {
//     const _signature = source.readBuffer();
//     const _signedData = source.readCell().asSlice();
//     return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
// }

// export function loadGetterTupleSignedBundle(source: TupleReader) {
//     const _signature = source.readBuffer();
//     const _signedData = source.readCell().asSlice();
//     return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
// }

// export function storeTupleSignedBundle(source: SignedBundle) {
//     const builder = new TupleBuilder();
//     builder.writeBuffer(source.signature);
//     builder.writeSlice(source.signedData.asCell());
//     return builder.build();
// }

// export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell());
//         },
//         parse: (src) => {
//             return loadSignedBundle(src.loadRef().beginParse());
//         }
//     }
// }

// export type StateInit = {
//     $$type: 'StateInit';
//     code: Cell;
//     data: Cell;
// }

// export function storeStateInit(src: StateInit) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeRef(src.code);
//         b_0.storeRef(src.data);
//     };
// }

// export function loadStateInit(slice: Slice) {
//     const sc_0 = slice;
//     const _code = sc_0.loadRef();
//     const _data = sc_0.loadRef();
//     return { $$type: 'StateInit' as const, code: _code, data: _data };
// }

// export function loadTupleStateInit(source: TupleReader) {
//     const _code = source.readCell();
//     const _data = source.readCell();
//     return { $$type: 'StateInit' as const, code: _code, data: _data };
// }

// export function loadGetterTupleStateInit(source: TupleReader) {
//     const _code = source.readCell();
//     const _data = source.readCell();
//     return { $$type: 'StateInit' as const, code: _code, data: _data };
// }

// export function storeTupleStateInit(source: StateInit) {
//     const builder = new TupleBuilder();
//     builder.writeCell(source.code);
//     builder.writeCell(source.data);
//     return builder.build();
// }

// export function dictValueParserStateInit(): DictionaryValue<StateInit> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
//         },
//         parse: (src) => {
//             return loadStateInit(src.loadRef().beginParse());
//         }
//     }
// }

// export type Context = {
//     $$type: 'Context';
//     bounceable: boolean;
//     sender: Address;
//     value: bigint;
//     raw: Slice;
// }

// export function storeContext(src: Context) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeBit(src.bounceable);
//         b_0.storeAddress(src.sender);
//         b_0.storeInt(src.value, 257);
//         b_0.storeRef(src.raw.asCell());
//     };
// }

// export function loadContext(slice: Slice) {
//     const sc_0 = slice;
//     const _bounceable = sc_0.loadBit();
//     const _sender = sc_0.loadAddress();
//     const _value = sc_0.loadIntBig(257);
//     const _raw = sc_0.loadRef().asSlice();
//     return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
// }

// export function loadTupleContext(source: TupleReader) {
//     const _bounceable = source.readBoolean();
//     const _sender = source.readAddress();
//     const _value = source.readBigNumber();
//     const _raw = source.readCell().asSlice();
//     return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
// }

// export function loadGetterTupleContext(source: TupleReader) {
//     const _bounceable = source.readBoolean();
//     const _sender = source.readAddress();
//     const _value = source.readBigNumber();
//     const _raw = source.readCell().asSlice();
//     return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
// }

// export function storeTupleContext(source: Context) {
//     const builder = new TupleBuilder();
//     builder.writeBoolean(source.bounceable);
//     builder.writeAddress(source.sender);
//     builder.writeNumber(source.value);
//     builder.writeSlice(source.raw.asCell());
//     return builder.build();
// }

// export function dictValueParserContext(): DictionaryValue<Context> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeContext(src)).endCell());
//         },
//         parse: (src) => {
//             return loadContext(src.loadRef().beginParse());
//         }
//     }
// }

// export type SendParameters = {
//     $$type: 'SendParameters';
//     mode: bigint;
//     body: Cell | null;
//     code: Cell | null;
//     data: Cell | null;
//     value: bigint;
//     to: Address;
//     bounce: boolean;
// }

// export function storeSendParameters(src: SendParameters) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.mode, 257);
//         if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
//         if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
//         if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
//         b_0.storeInt(src.value, 257);
//         b_0.storeAddress(src.to);
//         b_0.storeBit(src.bounce);
//     };
// }

// export function loadSendParameters(slice: Slice) {
//     const sc_0 = slice;
//     const _mode = sc_0.loadIntBig(257);
//     const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
//     const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
//     const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
//     const _value = sc_0.loadIntBig(257);
//     const _to = sc_0.loadAddress();
//     const _bounce = sc_0.loadBit();
//     return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
// }

// export function loadTupleSendParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _code = source.readCellOpt();
//     const _data = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _to = source.readAddress();
//     const _bounce = source.readBoolean();
//     return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
// }

// export function loadGetterTupleSendParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _code = source.readCellOpt();
//     const _data = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _to = source.readAddress();
//     const _bounce = source.readBoolean();
//     return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
// }

// export function storeTupleSendParameters(source: SendParameters) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.mode);
//     builder.writeCell(source.body);
//     builder.writeCell(source.code);
//     builder.writeCell(source.data);
//     builder.writeNumber(source.value);
//     builder.writeAddress(source.to);
//     builder.writeBoolean(source.bounce);
//     return builder.build();
// }

// export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
//         },
//         parse: (src) => {
//             return loadSendParameters(src.loadRef().beginParse());
//         }
//     }
// }

// export type MessageParameters = {
//     $$type: 'MessageParameters';
//     mode: bigint;
//     body: Cell | null;
//     value: bigint;
//     to: Address;
//     bounce: boolean;
// }

// export function storeMessageParameters(src: MessageParameters) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.mode, 257);
//         if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
//         b_0.storeInt(src.value, 257);
//         b_0.storeAddress(src.to);
//         b_0.storeBit(src.bounce);
//     };
// }

// export function loadMessageParameters(slice: Slice) {
//     const sc_0 = slice;
//     const _mode = sc_0.loadIntBig(257);
//     const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
//     const _value = sc_0.loadIntBig(257);
//     const _to = sc_0.loadAddress();
//     const _bounce = sc_0.loadBit();
//     return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
// }

// export function loadTupleMessageParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _to = source.readAddress();
//     const _bounce = source.readBoolean();
//     return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
// }

// export function loadGetterTupleMessageParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _to = source.readAddress();
//     const _bounce = source.readBoolean();
//     return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
// }

// export function storeTupleMessageParameters(source: MessageParameters) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.mode);
//     builder.writeCell(source.body);
//     builder.writeNumber(source.value);
//     builder.writeAddress(source.to);
//     builder.writeBoolean(source.bounce);
//     return builder.build();
// }

// export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeMessageParameters(src)).endCell());
//         },
//         parse: (src) => {
//             return loadMessageParameters(src.loadRef().beginParse());
//         }
//     }
// }

// export type DeployParameters = {
//     $$type: 'DeployParameters';
//     mode: bigint;
//     body: Cell | null;
//     value: bigint;
//     bounce: boolean;
//     init: StateInit;
// }

// export function storeDeployParameters(src: DeployParameters) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.mode, 257);
//         if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
//         b_0.storeInt(src.value, 257);
//         b_0.storeBit(src.bounce);
//         b_0.store(storeStateInit(src.init));
//     };
// }

// export function loadDeployParameters(slice: Slice) {
//     const sc_0 = slice;
//     const _mode = sc_0.loadIntBig(257);
//     const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
//     const _value = sc_0.loadIntBig(257);
//     const _bounce = sc_0.loadBit();
//     const _init = loadStateInit(sc_0);
//     return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
// }

// export function loadTupleDeployParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _bounce = source.readBoolean();
//     const _init = loadTupleStateInit(source);
//     return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
// }

// export function loadGetterTupleDeployParameters(source: TupleReader) {
//     const _mode = source.readBigNumber();
//     const _body = source.readCellOpt();
//     const _value = source.readBigNumber();
//     const _bounce = source.readBoolean();
//     const _init = loadGetterTupleStateInit(source);
//     return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
// }

// export function storeTupleDeployParameters(source: DeployParameters) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.mode);
//     builder.writeCell(source.body);
//     builder.writeNumber(source.value);
//     builder.writeBoolean(source.bounce);
//     builder.writeTuple(storeTupleStateInit(source.init));
//     return builder.build();
// }

// export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell());
//         },
//         parse: (src) => {
//             return loadDeployParameters(src.loadRef().beginParse());
//         }
//     }
// }

// export type StdAddress = {
//     $$type: 'StdAddress';
//     workchain: bigint;
//     address: bigint;
// }

// export function storeStdAddress(src: StdAddress) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.workchain, 8);
//         b_0.storeUint(src.address, 256);
//     };
// }

// export function loadStdAddress(slice: Slice) {
//     const sc_0 = slice;
//     const _workchain = sc_0.loadIntBig(8);
//     const _address = sc_0.loadUintBig(256);
//     return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
// }

// export function loadTupleStdAddress(source: TupleReader) {
//     const _workchain = source.readBigNumber();
//     const _address = source.readBigNumber();
//     return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
// }

// export function loadGetterTupleStdAddress(source: TupleReader) {
//     const _workchain = source.readBigNumber();
//     const _address = source.readBigNumber();
//     return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
// }

// export function storeTupleStdAddress(source: StdAddress) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.workchain);
//     builder.writeNumber(source.address);
//     return builder.build();
// }

// export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
//         },
//         parse: (src) => {
//             return loadStdAddress(src.loadRef().beginParse());
//         }
//     }
// }

// export type VarAddress = {
//     $$type: 'VarAddress';
//     workchain: bigint;
//     address: Slice;
// }

// export function storeVarAddress(src: VarAddress) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeInt(src.workchain, 32);
//         b_0.storeRef(src.address.asCell());
//     };
// }

// export function loadVarAddress(slice: Slice) {
//     const sc_0 = slice;
//     const _workchain = sc_0.loadIntBig(32);
//     const _address = sc_0.loadRef().asSlice();
//     return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
// }

// export function loadTupleVarAddress(source: TupleReader) {
//     const _workchain = source.readBigNumber();
//     const _address = source.readCell().asSlice();
//     return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
// }

// export function loadGetterTupleVarAddress(source: TupleReader) {
//     const _workchain = source.readBigNumber();
//     const _address = source.readCell().asSlice();
//     return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
// }

// export function storeTupleVarAddress(source: VarAddress) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.workchain);
//     builder.writeSlice(source.address.asCell());
//     return builder.build();
// }

// export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
//         },
//         parse: (src) => {
//             return loadVarAddress(src.loadRef().beginParse());
//         }
//     }
// }

// export type BasechainAddress = {
//     $$type: 'BasechainAddress';
//     hash: bigint | null;
// }

// export function storeBasechainAddress(src: BasechainAddress) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         if (src.hash !== null && src.hash !== undefined) { b_0.storeBit(true).storeInt(src.hash, 257); } else { b_0.storeBit(false); }
//     };
// }

// export function loadBasechainAddress(slice: Slice) {
//     const sc_0 = slice;
//     const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
//     return { $$type: 'BasechainAddress' as const, hash: _hash };
// }

// export function loadTupleBasechainAddress(source: TupleReader) {
//     const _hash = source.readBigNumberOpt();
//     return { $$type: 'BasechainAddress' as const, hash: _hash };
// }

// export function loadGetterTupleBasechainAddress(source: TupleReader) {
//     const _hash = source.readBigNumberOpt();
//     return { $$type: 'BasechainAddress' as const, hash: _hash };
// }

// export function storeTupleBasechainAddress(source: BasechainAddress) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.hash);
//     return builder.build();
// }

// export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell());
//         },
//         parse: (src) => {
//             return loadBasechainAddress(src.loadRef().beginParse());
//         }
//     }
// }

// export type Deploy = {
//     $$type: 'Deploy';
//     queryId: bigint;
// }

// export function storeDeploy(src: Deploy) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(2490013878, 32);
//         b_0.storeUint(src.queryId, 64);
//     };
// }

// export function loadDeploy(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
//     const _queryId = sc_0.loadUintBig(64);
//     return { $$type: 'Deploy' as const, queryId: _queryId };
// }

// export function loadTupleDeploy(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     return { $$type: 'Deploy' as const, queryId: _queryId };
// }

// export function loadGetterTupleDeploy(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     return { $$type: 'Deploy' as const, queryId: _queryId };
// }

// export function storeTupleDeploy(source: Deploy) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.queryId);
//     return builder.build();
// }

// export function dictValueParserDeploy(): DictionaryValue<Deploy> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
//         },
//         parse: (src) => {
//             return loadDeploy(src.loadRef().beginParse());
//         }
//     }
// }

// export type DeployOk = {
//     $$type: 'DeployOk';
//     queryId: bigint;
// }

// export function storeDeployOk(src: DeployOk) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(2952335191, 32);
//         b_0.storeUint(src.queryId, 64);
//     };
// }

// export function loadDeployOk(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
//     const _queryId = sc_0.loadUintBig(64);
//     return { $$type: 'DeployOk' as const, queryId: _queryId };
// }

// export function loadTupleDeployOk(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     return { $$type: 'DeployOk' as const, queryId: _queryId };
// }

// export function loadGetterTupleDeployOk(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     return { $$type: 'DeployOk' as const, queryId: _queryId };
// }

// export function storeTupleDeployOk(source: DeployOk) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.queryId);
//     return builder.build();
// }

// export function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
//         },
//         parse: (src) => {
//             return loadDeployOk(src.loadRef().beginParse());
//         }
//     }
// }

// export type FactoryDeploy = {
//     $$type: 'FactoryDeploy';
//     queryId: bigint;
//     cashback: Address;
// }

// export function storeFactoryDeploy(src: FactoryDeploy) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(1829761339, 32);
//         b_0.storeUint(src.queryId, 64);
//         b_0.storeAddress(src.cashback);
//     };
// }

// export function loadFactoryDeploy(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
//     const _queryId = sc_0.loadUintBig(64);
//     const _cashback = sc_0.loadAddress();
//     return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
// }

// export function loadTupleFactoryDeploy(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _cashback = source.readAddress();
//     return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
// }

// export function loadGetterTupleFactoryDeploy(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _cashback = source.readAddress();
//     return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
// }

// export function storeTupleFactoryDeploy(source: FactoryDeploy) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.queryId);
//     builder.writeAddress(source.cashback);
//     return builder.build();
// }

// export function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
//         },
//         parse: (src) => {
//             return loadFactoryDeploy(src.loadRef().beginParse());
//         }
//     }
// }

// export type ChangeOwner = {
//     $$type: 'ChangeOwner';
//     queryId: bigint;
//     newOwner: Address;
// }

// export function storeChangeOwner(src: ChangeOwner) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(2174598809, 32);
//         b_0.storeUint(src.queryId, 64);
//         b_0.storeAddress(src.newOwner);
//     };
// }

// export function loadChangeOwner(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
//     const _queryId = sc_0.loadUintBig(64);
//     const _newOwner = sc_0.loadAddress();
//     return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function loadTupleChangeOwner(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _newOwner = source.readAddress();
//     return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function loadGetterTupleChangeOwner(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _newOwner = source.readAddress();
//     return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function storeTupleChangeOwner(source: ChangeOwner) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.queryId);
//     builder.writeAddress(source.newOwner);
//     return builder.build();
// }

// export function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
//         },
//         parse: (src) => {
//             return loadChangeOwner(src.loadRef().beginParse());
//         }
//     }
// }

// export type ChangeOwnerOk = {
//     $$type: 'ChangeOwnerOk';
//     queryId: bigint;
//     newOwner: Address;
// }

// export function storeChangeOwnerOk(src: ChangeOwnerOk) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(846932810, 32);
//         b_0.storeUint(src.queryId, 64);
//         b_0.storeAddress(src.newOwner);
//     };
// }

// export function loadChangeOwnerOk(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
//     const _queryId = sc_0.loadUintBig(64);
//     const _newOwner = sc_0.loadAddress();
//     return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function loadTupleChangeOwnerOk(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _newOwner = source.readAddress();
//     return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function loadGetterTupleChangeOwnerOk(source: TupleReader) {
//     const _queryId = source.readBigNumber();
//     const _newOwner = source.readAddress();
//     return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
// }

// export function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.queryId);
//     builder.writeAddress(source.newOwner);
//     return builder.build();
// }

// export function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
//         },
//         parse: (src) => {
//             return loadChangeOwnerOk(src.loadRef().beginParse());
//         }
//     }
// }

// export type NewTodo = {
//     $$type: 'NewTodo';
//     task: string;
// }

// export function storeNewTodo(src: NewTodo) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(1804651575, 32);
//         b_0.storeStringRefTail(src.task);
//     };
// }

// export function loadNewTodo(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 1804651575) { throw Error('Invalid prefix'); }
//     const _task = sc_0.loadStringRefTail();
//     return { $$type: 'NewTodo' as const, task: _task };
// }

// export function loadTupleNewTodo(source: TupleReader) {
//     const _task = source.readString();
//     return { $$type: 'NewTodo' as const, task: _task };
// }

// export function loadGetterTupleNewTodo(source: TupleReader) {
//     const _task = source.readString();
//     return { $$type: 'NewTodo' as const, task: _task };
// }

// export function storeTupleNewTodo(source: NewTodo) {
//     const builder = new TupleBuilder();
//     builder.writeString(source.task);
//     return builder.build();
// }

// export function dictValueParserNewTodo(): DictionaryValue<NewTodo> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeNewTodo(src)).endCell());
//         },
//         parse: (src) => {
//             return loadNewTodo(src.loadRef().beginParse());
//         }
//     }
// }

// export type InternalSetTask = {
//     $$type: 'InternalSetTask';
//     task: string;
// }

// export function storeInternalSetTask(src: InternalSetTask) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(3152733790, 32);
//         b_0.storeStringRefTail(src.task);
//     };
// }

// export function loadInternalSetTask(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 3152733790) { throw Error('Invalid prefix'); }
//     const _task = sc_0.loadStringRefTail();
//     return { $$type: 'InternalSetTask' as const, task: _task };
// }

// export function loadTupleInternalSetTask(source: TupleReader) {
//     const _task = source.readString();
//     return { $$type: 'InternalSetTask' as const, task: _task };
// }

// export function loadGetterTupleInternalSetTask(source: TupleReader) {
//     const _task = source.readString();
//     return { $$type: 'InternalSetTask' as const, task: _task };
// }

// export function storeTupleInternalSetTask(source: InternalSetTask) {
//     const builder = new TupleBuilder();
//     builder.writeString(source.task);
//     return builder.build();
// }

// export function dictValueParserInternalSetTask(): DictionaryValue<InternalSetTask> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeInternalSetTask(src)).endCell());
//         },
//         parse: (src) => {
//             return loadInternalSetTask(src.loadRef().beginParse());
//         }
//     }
// }

// export type CompleteTodo = {
//     $$type: 'CompleteTodo';
//     seqNo: bigint;
// }

// export function storeCompleteTodo(src: CompleteTodo) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(167399553, 32);
//         b_0.storeUint(src.seqNo, 32);
//     };
// }

// export function loadCompleteTodo(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 167399553) { throw Error('Invalid prefix'); }
//     const _seqNo = sc_0.loadUintBig(32);
//     return { $$type: 'CompleteTodo' as const, seqNo: _seqNo };
// }

// export function loadTupleCompleteTodo(source: TupleReader) {
//     const _seqNo = source.readBigNumber();
//     return { $$type: 'CompleteTodo' as const, seqNo: _seqNo };
// }

// export function loadGetterTupleCompleteTodo(source: TupleReader) {
//     const _seqNo = source.readBigNumber();
//     return { $$type: 'CompleteTodo' as const, seqNo: _seqNo };
// }

// export function storeTupleCompleteTodo(source: CompleteTodo) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.seqNo);
//     return builder.build();
// }

// export function dictValueParserCompleteTodo(): DictionaryValue<CompleteTodo> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeCompleteTodo(src)).endCell());
//         },
//         parse: (src) => {
//             return loadCompleteTodo(src.loadRef().beginParse());
//         }
//     }
// }

// export type InternalComplete = {
//     $$type: 'InternalComplete';
//     excess: Address;
// }

// export function storeInternalComplete(src: InternalComplete) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(3472919628, 32);
//         b_0.storeAddress(src.excess);
//     };
// }

// export function loadInternalComplete(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 3472919628) { throw Error('Invalid prefix'); }
//     const _excess = sc_0.loadAddress();
//     return { $$type: 'InternalComplete' as const, excess: _excess };
// }

// export function loadTupleInternalComplete(source: TupleReader) {
//     const _excess = source.readAddress();
//     return { $$type: 'InternalComplete' as const, excess: _excess };
// }

// export function loadGetterTupleInternalComplete(source: TupleReader) {
//     const _excess = source.readAddress();
//     return { $$type: 'InternalComplete' as const, excess: _excess };
// }

// export function storeTupleInternalComplete(source: InternalComplete) {
//     const builder = new TupleBuilder();
//     builder.writeAddress(source.excess);
//     return builder.build();
// }

// export function dictValueParserInternalComplete(): DictionaryValue<InternalComplete> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeInternalComplete(src)).endCell());
//         },
//         parse: (src) => {
//             return loadInternalComplete(src.loadRef().beginParse());
//         }
//     }
// }

// export type NewTodoResponse = {
//     $$type: 'NewTodoResponse';
//     seqNo: bigint;
// }

// export function storeNewTodoResponse(src: NewTodoResponse) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeUint(1514120831, 32);
//         b_0.storeUint(src.seqNo, 256);
//     };
// }

// export function loadNewTodoResponse(slice: Slice) {
//     const sc_0 = slice;
//     if (sc_0.loadUint(32) !== 1514120831) { throw Error('Invalid prefix'); }
//     const _seqNo = sc_0.loadUintBig(256);
//     return { $$type: 'NewTodoResponse' as const, seqNo: _seqNo };
// }

// export function loadTupleNewTodoResponse(source: TupleReader) {
//     const _seqNo = source.readBigNumber();
//     return { $$type: 'NewTodoResponse' as const, seqNo: _seqNo };
// }

// export function loadGetterTupleNewTodoResponse(source: TupleReader) {
//     const _seqNo = source.readBigNumber();
//     return { $$type: 'NewTodoResponse' as const, seqNo: _seqNo };
// }

// export function storeTupleNewTodoResponse(source: NewTodoResponse) {
//     const builder = new TupleBuilder();
//     builder.writeNumber(source.seqNo);
//     return builder.build();
// }

// export function dictValueParserNewTodoResponse(): DictionaryValue<NewTodoResponse> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeNewTodoResponse(src)).endCell());
//         },
//         parse: (src) => {
//             return loadNewTodoResponse(src.loadRef().beginParse());
//         }
//     }
// }

// export type TodoDetails = {
//     $$type: 'TodoDetails';
//     task: string;
//     completed: boolean;
// }

// export function storeTodoDetails(src: TodoDetails) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeStringRefTail(src.task);
//         b_0.storeBit(src.completed);
//     };
// }

// export function loadTodoDetails(slice: Slice) {
//     const sc_0 = slice;
//     const _task = sc_0.loadStringRefTail();
//     const _completed = sc_0.loadBit();
//     return { $$type: 'TodoDetails' as const, task: _task, completed: _completed };
// }

// export function loadTupleTodoDetails(source: TupleReader) {
//     const _task = source.readString();
//     const _completed = source.readBoolean();
//     return { $$type: 'TodoDetails' as const, task: _task, completed: _completed };
// }

// export function loadGetterTupleTodoDetails(source: TupleReader) {
//     const _task = source.readString();
//     const _completed = source.readBoolean();
//     return { $$type: 'TodoDetails' as const, task: _task, completed: _completed };
// }

// export function storeTupleTodoDetails(source: TodoDetails) {
//     const builder = new TupleBuilder();
//     builder.writeString(source.task);
//     builder.writeBoolean(source.completed);
//     return builder.build();
// }

// export function dictValueParserTodoDetails(): DictionaryValue<TodoDetails> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeTodoDetails(src)).endCell());
//         },
//         parse: (src) => {
//             return loadTodoDetails(src.loadRef().beginParse());
//         }
//     }
// }

// export type TodoChild$Data = {
//     $$type: 'TodoChild$Data';
//     parent: Address;
//     seqNo: bigint;
//     task: string;
//     completed: boolean;
// }

// export function storeTodoChild$Data(src: TodoChild$Data) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeAddress(src.parent);
//         b_0.storeUint(src.seqNo, 32);
//         b_0.storeStringRefTail(src.task);
//         b_0.storeBit(src.completed);
//     };
// }

// export function loadTodoChild$Data(slice: Slice) {
//     const sc_0 = slice;
//     const _parent = sc_0.loadAddress();
//     const _seqNo = sc_0.loadUintBig(32);
//     const _task = sc_0.loadStringRefTail();
//     const _completed = sc_0.loadBit();
//     return { $$type: 'TodoChild$Data' as const, parent: _parent, seqNo: _seqNo, task: _task, completed: _completed };
// }

// export function loadTupleTodoChild$Data(source: TupleReader) {
//     const _parent = source.readAddress();
//     const _seqNo = source.readBigNumber();
//     const _task = source.readString();
//     const _completed = source.readBoolean();
//     return { $$type: 'TodoChild$Data' as const, parent: _parent, seqNo: _seqNo, task: _task, completed: _completed };
// }

// export function loadGetterTupleTodoChild$Data(source: TupleReader) {
//     const _parent = source.readAddress();
//     const _seqNo = source.readBigNumber();
//     const _task = source.readString();
//     const _completed = source.readBoolean();
//     return { $$type: 'TodoChild$Data' as const, parent: _parent, seqNo: _seqNo, task: _task, completed: _completed };
// }

// export function storeTupleTodoChild$Data(source: TodoChild$Data) {
//     const builder = new TupleBuilder();
//     builder.writeAddress(source.parent);
//     builder.writeNumber(source.seqNo);
//     builder.writeString(source.task);
//     builder.writeBoolean(source.completed);
//     return builder.build();
// }

// export function dictValueParserTodoChild$Data(): DictionaryValue<TodoChild$Data> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeTodoChild$Data(src)).endCell());
//         },
//         parse: (src) => {
//             return loadTodoChild$Data(src.loadRef().beginParse());
//         }
//     }
// }

// export type TodoParent$Data = {
//     $$type: 'TodoParent$Data';
//     owner: Address;
//     numTodos: bigint;
// }

// export function storeTodoParent$Data(src: TodoParent$Data) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//         b_0.storeAddress(src.owner);
//         b_0.storeUint(src.numTodos, 32);
//     };
// }

// export function loadTodoParent$Data(slice: Slice) {
//     const sc_0 = slice;
//     const _owner = sc_0.loadAddress();
//     const _numTodos = sc_0.loadUintBig(32);
//     return { $$type: 'TodoParent$Data' as const, owner: _owner, numTodos: _numTodos };
// }

// export function loadTupleTodoParent$Data(source: TupleReader) {
//     const _owner = source.readAddress();
//     const _numTodos = source.readBigNumber();
//     return { $$type: 'TodoParent$Data' as const, owner: _owner, numTodos: _numTodos };
// }

// export function loadGetterTupleTodoParent$Data(source: TupleReader) {
//     const _owner = source.readAddress();
//     const _numTodos = source.readBigNumber();
//     return { $$type: 'TodoParent$Data' as const, owner: _owner, numTodos: _numTodos };
// }

// export function storeTupleTodoParent$Data(source: TodoParent$Data) {
//     const builder = new TupleBuilder();
//     builder.writeAddress(source.owner);
//     builder.writeNumber(source.numTodos);
//     return builder.build();
// }

// export function dictValueParserTodoParent$Data(): DictionaryValue<TodoParent$Data> {
//     return {
//         serialize: (src, builder) => {
//             builder.storeRef(beginCell().store(storeTodoParent$Data(src)).endCell());
//         },
//         parse: (src) => {
//             return loadTodoParent$Data(src.loadRef().beginParse());
//         }
//     }
// }

//  type TodoParent_init_args = {
//     $$type: 'TodoParent_init_args';
// }

// function initTodoParent_init_args(src: TodoParent_init_args) {
//     return (builder: Builder) => {
//         const b_0 = builder;
//     };
// }

// async function TodoParent_init() {
//     const __code = Cell.fromHex('b5ee9c7241021801000475000228ff008e88f4a413f4bcf2c80bed5320e303ed43d9010902027102040137be28ef6a268690000cbfd20698facb6094a98387c2100f16d9e3610c0300022102012005070139ba755ed44d0d2000197fa40d31f596c12953070f84201e258db3c6c218060164f82801db3c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d00e0137bbc77ed44d0d2000197fa40d31f596c12953070f84201e2db3c6c2180800022003b83001d072d721d200d200fa4021103450666f04f86102f862ed44d0d2000197fa40d31f596c12953070f84201e203925f03e001d70d1ff2e0822182106b90cc37bae30221821009fa5081bae302018210946a98b6bae3025f03f2c0820a0c1703fa31d430d002a4f82821db3c5c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d005c8018210bbeae65e58cb1f01c8cecdc9103582100bebc2005a725940357fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf818ae2f400c901fb0021c80e150b007c0182105a3fa67f58cb1fcbffc912f8427f705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca005902cecb1fc9ed5404fc31d31f3002db3c8200bb485331bbf2f4f8285003db3c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0f842c8018210cf008c4c58cb1fcec9708042036d6d5a7fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf818ae2f400c901fb00010d0e15160010f84222c705f2e084011e88c87001ca005a02ce810101cf00c90f0228ff008e88f4a413f4bcf2c80bed5320e303ed43d910120159a6741abb513434800067be9034c7f50074007480154c1b0527be9020404075c01640b44062c21c38b6cf1b10a01100025c01f43001d072d721d200d200fa4021103450666f04f86102f862ed44d0d200019efa40d31fd401d001d20055306c149efa40810101d7005902d1018b0870e205925f05e003d70d1ff2e082218210bbeae65eba8e25313302d430d0f84222c705f2e4105003c87f01ca0055305034cecb1f01c8cecdca00c9ed54e0211301f88210cf008c4cba8e63313403fa4030817c8af84223c705f2f47f017080426d5a6d6d40037fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb004330c87f01ca0055305034cecb1f01c8cecdca00c9ed54e0018210946a98b6bae3025f05f2c082140098d33f30c8018210aff90f5758cb1fcb3fc9443012f84270705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0055305034cecb1f01c8cecdca00c9ed54001a58cf8680cf8480f400f400cf81001ac87f01ca005902cecb1fc9ed540084d33f30c8018210aff90f5758cb1fcb3fc912f84270705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca005902cecb1fc9ed540bb391bd');
//     const builder = beginCell();
//     builder.storeUint(0, 1);
//     initTodoParent_init_args({ $$type: 'TodoParent_init_args' })(builder);
//     const __data = builder.endCell();
//     return { code: __code, data: __data };
// }

// export const TodoParent_errors = {
//     2: { message: "Stack underflow" },
//     3: { message: "Stack overflow" },
//     4: { message: "Integer overflow" },
//     5: { message: "Integer out of expected range" },
//     6: { message: "Invalid opcode" },
//     7: { message: "Type check error" },
//     8: { message: "Cell overflow" },
//     9: { message: "Cell underflow" },
//     10: { message: "Dictionary error" },
//     11: { message: "'Unknown' error" },
//     12: { message: "Fatal error" },
//     13: { message: "Out of gas error" },
//     14: { message: "Virtualization error" },
//     32: { message: "Action list is invalid" },
//     33: { message: "Action list is too long" },
//     34: { message: "Action is invalid or not supported" },
//     35: { message: "Invalid source address in outbound message" },
//     36: { message: "Invalid destination address in outbound message" },
//     37: { message: "Not enough Toncoin" },
//     38: { message: "Not enough extra currencies" },
//     39: { message: "Outbound message does not fit into a cell after rewriting" },
//     40: { message: "Cannot process a message" },
//     41: { message: "Library reference is null" },
//     42: { message: "Library change action error" },
//     43: { message: "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree" },
//     50: { message: "Account state size exceeded limits" },
//     128: { message: "Null reference exception" },
//     129: { message: "Invalid serialization prefix" },
//     130: { message: "Invalid incoming message" },
//     131: { message: "Constraints error" },
//     132: { message: "Access denied" },
//     133: { message: "Contract stopped" },
//     134: { message: "Invalid argument" },
//     135: { message: "Code of a contract was not found" },
//     136: { message: "Invalid standard address" },
//     138: { message: "Not a basechain address" },
//     1040: { message: "Parent Only" },
//     31882: { message: "Parent ONly" },
//     47944: { message: "Todo dont exist" },
// } as const

// export const TodoParent_errors_backward = {
//     "Stack underflow": 2,
//     "Stack overflow": 3,
//     "Integer overflow": 4,
//     "Integer out of expected range": 5,
//     "Invalid opcode": 6,
//     "Type check error": 7,
//     "Cell overflow": 8,
//     "Cell underflow": 9,
//     "Dictionary error": 10,
//     "'Unknown' error": 11,
//     "Fatal error": 12,
//     "Out of gas error": 13,
//     "Virtualization error": 14,
//     "Action list is invalid": 32,
//     "Action list is too long": 33,
//     "Action is invalid or not supported": 34,
//     "Invalid source address in outbound message": 35,
//     "Invalid destination address in outbound message": 36,
//     "Not enough Toncoin": 37,
//     "Not enough extra currencies": 38,
//     "Outbound message does not fit into a cell after rewriting": 39,
//     "Cannot process a message": 40,
//     "Library reference is null": 41,
//     "Library change action error": 42,
//     "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43,
//     "Account state size exceeded limits": 50,
//     "Null reference exception": 128,
//     "Invalid serialization prefix": 129,
//     "Invalid incoming message": 130,
//     "Constraints error": 131,
//     "Access denied": 132,
//     "Contract stopped": 133,
//     "Invalid argument": 134,
//     "Code of a contract was not found": 135,
//     "Invalid standard address": 136,
//     "Not a basechain address": 138,
//     "Parent Only": 1040,
//     "Parent ONly": 31882,
//     "Todo dont exist": 47944,
// } as const

// const TodoParent_types: ABIType[] = [
//     {"name":"DataSize","header":null,"fields":[{"name":"cells","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bits","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"refs","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
//     {"name":"SignedBundle","header":null,"fields":[{"name":"signature","type":{"kind":"simple","type":"fixed-bytes","optional":false,"format":64}},{"name":"signedData","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
//     {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
//     {"name":"Context","header":null,"fields":[{"name":"bounceable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
//     {"name":"SendParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
//     {"name":"MessageParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
//     {"name":"DeployParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"init","type":{"kind":"simple","type":"StateInit","optional":false}}]},
//     {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
//     {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
//     {"name":"BasechainAddress","header":null,"fields":[{"name":"hash","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
//     {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
//     {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
//     {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
//     {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
//     {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
//     {"name":"NewTodo","header":1804651575,"fields":[{"name":"task","type":{"kind":"simple","type":"string","optional":false}}]},
//     {"name":"InternalSetTask","header":3152733790,"fields":[{"name":"task","type":{"kind":"simple","type":"string","optional":false}}]},
//     {"name":"CompleteTodo","header":167399553,"fields":[{"name":"seqNo","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
//     {"name":"InternalComplete","header":3472919628,"fields":[{"name":"excess","type":{"kind":"simple","type":"address","optional":false}}]},
//     {"name":"NewTodoResponse","header":1514120831,"fields":[{"name":"seqNo","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
//     {"name":"TodoDetails","header":null,"fields":[{"name":"task","type":{"kind":"simple","type":"string","optional":false}},{"name":"completed","type":{"kind":"simple","type":"bool","optional":false}}]},
//     {"name":"TodoChild$Data","header":null,"fields":[{"name":"parent","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqNo","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"task","type":{"kind":"simple","type":"string","optional":false}},{"name":"completed","type":{"kind":"simple","type":"bool","optional":false}}]},
//     {"name":"TodoParent$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"numTodos","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
// ]

// const TodoParent_opcodes = {
//     "Deploy": 2490013878,
//     "DeployOk": 2952335191,
//     "FactoryDeploy": 1829761339,
//     "ChangeOwner": 2174598809,
//     "ChangeOwnerOk": 846932810,
//     "NewTodo": 1804651575,
//     "InternalSetTask": 3152733790,
//     "CompleteTodo": 167399553,
//     "InternalComplete": 3472919628,
//     "NewTodoResponse": 1514120831,
// }

// const TodoParent_getters: ABIGetter[] = [
//     {"name":"numTodos","methodId":130167,"arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
//     {"name":"todoAddress","methodId":108373,"arguments":[{"name":"seqNo","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
//     {"name":"owner","methodId":83229,"arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
// ]

// export const TodoParent_getterMapping: { [key: string]: string } = {
//     'numTodos': 'getNumTodos',
//     'todoAddress': 'getTodoAddress',
//     'owner': 'getOwner',
// }

// const TodoParent_receivers: ABIReceiver[] = [
//     {"receiver":"internal","message":{"kind":"typed","type":"NewTodo"}},
//     {"receiver":"internal","message":{"kind":"typed","type":"CompleteTodo"}},
//     {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
// ]


// export class TodoParent implements Contract {
    
//     public static readonly storageReserve = 0n;
//     public static readonly errors = TodoParent_errors_backward;
//     public static readonly opcodes = TodoParent_opcodes;
    
//     static async init() {
//         return await TodoParent_init();
//     }
    
//     static async fromInit() {
//         const __gen_init = await TodoParent_init();
//         const address = contractAddress(0, __gen_init);
//         return new TodoParent(address, __gen_init);
//     }
    
//     static fromAddress(address: Address) {
//         return new TodoParent(address);
//     }
    
//     readonly address: Address; 
//     readonly init?: { code: Cell, data: Cell };
//     readonly abi: ContractABI = {
//         types:  TodoParent_types,
//         getters: TodoParent_getters,
//         receivers: TodoParent_receivers,
//         errors: TodoParent_errors,
//     };
    
//     constructor(address: Address, init?: { code: Cell, data: Cell }) {
//         this.address = address;
//         this.init = init;
//     }
    
//     async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: NewTodo | CompleteTodo | Deploy) {
        
//         let body: Cell | null = null;
//         if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'NewTodo') {
//             body = beginCell().store(storeNewTodo(message)).endCell();
//         }
//         if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CompleteTodo') {
//             body = beginCell().store(storeCompleteTodo(message)).endCell();
//         }
//         if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
//             body = beginCell().store(storeDeploy(message)).endCell();
//         }
//         if (body === null) { throw new Error('Invalid message type'); }
        
//         await provider.internal(via, { ...args, body: body });
        
//     }
    
//     async getNumTodos(provider: ContractProvider) {
//         const builder = new TupleBuilder();
//         const source = (await provider.get('numTodos', builder.build())).stack;
//         const result = source.readBigNumber();
//         return result;
//     }
    
//     async getTodoAddress(provider: ContractProvider, seqNo: bigint) {
//         const builder = new TupleBuilder();
//         builder.writeNumber(seqNo);
//         const source = (await provider.get('todoAddress', builder.build())).stack;
//         const result = source.readAddress();
//         return result;
//     }
    
//     async getOwner(provider: ContractProvider) {
//         const builder = new TupleBuilder();
//         const source = (await provider.get('owner', builder.build())).stack;
//         const result = source.readAddress();
//         return result;
//     }
    
// }