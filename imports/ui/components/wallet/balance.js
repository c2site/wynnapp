import { useState, useEffect } from 'react'
import {getToken} from "./token";
import BigNumber from 'bignumber.js'
import BN from 'bn.js'
import { useWeb3React } from '@web3-react/core'
import {web3BNToFloatString} from "./utils";

export default function useBalance(
    decimals = 18,
) {
    const [balance, setBalance] = useState('0')

    const { account, library } = useWeb3React()

    useEffect(async () => {
        let isCancelled = false

        function getBalance() {
            return new Promise((resolve) => {
                if (!library) {
                    resolve(new BN('0'))
                    return
                }

                try {
                    const contract = getToken(library)
                    contract?.methods
                        .balanceOf(account)
                        .call()
                        .then((value) => {
                            resolve(new BN(value))
                        })
                        .catch((error) => {
                            console.log(error)
                            resolve(new BN('0'))
                        })
                } catch (error) {
                    resolve(new BN('0'))
                }
            })
        }

        async function run() {
            const bn = await getBalance()
            if (!isCancelled) {
                const pow = new BigNumber('10').pow(new BigNumber(decimals))
                setBalance(web3BNToFloatString(bn, pow, 4, BigNumber.ROUND_DOWN))
            }
        }

        await run()

        return () => {
            isCancelled = true
        }
    }, [library, decimals, account])

    return [balance]
}