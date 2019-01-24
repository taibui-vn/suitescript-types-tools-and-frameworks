/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { copyCategory } from './catalog/copyCategory';
import { initialize as initializeLogger, log } from './log/responseLogger';
import { removeCategory } from './catalog/removeCategory';
import { load, Type } from 'N/record';
import { getLines } from './record/sublistUtil';
import { moveCategory } from './catalog/moveCategory';
import { runSpecs } from './__tests__';
import { getObjectValueTypes } from './misc';
// import * as nsError from 'N/error';
 
  
export let onRequest: EntryPoints.Suitelet.onRequest = context => {
  try {
    initializeLogger({ response: context.response, enabled: true })
    runSpecs()
  }catch(ex){

    log(`${printError(ex)}`)
  }
  function printError(ex:Error&{fileName: string, lineNumber: number}):string {
    return `Error ${ex.name} ${ex.message} ${ex.fileName} ${ex.lineNumber}`
  }
    // load({id: 18, type: 'commercecategory', })
        // @ts-ignore
  //       const i = firstNonMatrixItemResult() as any
  // log('seba'+(!!i))
  //       log(`${JSON.stringify(i && getObjectValueTypes(i))}
        

  //       ${JSON.stringify(i!.toJSON(), null, 2)}
        

  //       ${JSON.stringify(load({id: i.id, type: i.recordType}), null, 2)}`)

    // runSomeSpecs()

    // log('foo2')
 

    // log(JSON.stringify(results,null, 2));


    // const newCategory = copyCategory({
    //     categoryId: 18,
    //     newPrimaryParent: null
    // })

    // const newCategory = moveCategory({
    //     categoryId: 18,
    //     newPrimaryParent: null
    // })

    // log(`New category copied: ${newCategory.id}`)
    // removeCategory({categoryId: 32})

    // const record = load({id: 32, type: 'commercecategory'})
    // getLines({record, sublistId: 'items'}).forEach(line=>{
    //     log(`Removing items item ${record.getSublistValue({sublistId: 'items', fieldId: 'item', line: 0})}`)
    //     record.removeLine({sublistId: 'items', line: 0})
    // })
    // record.save()
    // record.removeSublistSubrecord({sublistId: 'items', line: 0, fieldId: 'item'})
    // record.removeSublistSubrecord({sublistId: 'items', line})
//   } catch (error) {
//     log(`General error: 

// ${error.type} ${error.name} ${error.code} ${error.message} 

// ${(error.stack || []).map((s: string) => `${s}`).join('\n')}
//         Message: ${error.message}

// ${error}
 
// ${Object.keys(error)}
// `);
//   }
} 



// import { describe, expect, it, SpecRunner } from './spec/index'
// import { TextReporter } from './spec/textReporter';
// import { matrixItemTest } from './catalog/__tests__/matrixItemTest';
// import { getObjectValueTypes } from './misc';
// import { findNonMatrixItem } from './catalog/matrixItem';
// function runSomeSpecs() {
//   describe('Fruit', () => {
//     it('can be eaten', () => {
//       expect([1, 2, 3]).toContain(2)
//     })
//     it('can walk', () => {
//       expect('asdas').toContain('as')
//       expect(Math.random() > 2).toBe(true)
//     })
//   })

// try {
    
//   matrixItemTest()
// // } catch (error) {
// //     log('error')
// //     // @ts-ignore
// //     // const e = nlapiCreateError(error).toString()
// //     // log(e+'')
// // }
//   const result = SpecRunner.getInstance().run()
//   log(new TextReporter().render({ result }).output)
// }  
