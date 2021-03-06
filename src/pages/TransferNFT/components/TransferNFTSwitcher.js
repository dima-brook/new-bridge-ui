// External Imports
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { Image } from "react-bootstrap";
// SVG Icons
import userAvatar from '../../../assets/images/userAvatar.svg';
import leftArrow from '../../../assets/images/leftArrow.svg';
import rightArrow from '../../../assets/images/rightArrow.svg';
// User components
import CardWrap from "../../../UIElemnts/CardWrap";
import SelectItem from "../../../UIElemnts/SelectItem";
import Classes from './TransferNFTSwitcher.module.css';

// Blockchain Related
import { 
    selectFromChain,
    selectToChain,
    selectFromAccount,
    selectToAccount,
    swapChains,

} from '../../../actions'
import { mapChainToAvatar} from '../../../mappers';
import { chains } from '../../../config';


const TransferNFTSwitcher = ({ 
    fromChain, 
    toChain, 
    fromAccount, 
    toAccount, 
    fromAccountS, 
    toAccountS, 
    onSwapChainsPressed,

    selectFromChain,
    selectToChain,
    selectFromAccount,
    selectToAccount,

}) => {

    const fromTranBridge = chains.map(item => {
        return {
            key: item,
            text: item === chains[0] || item === chains[2] ? item : `${item} - coming soon`,
            disabled: item === chains[0] || item === chains[2] ? false : true,
            value: item,
            image: { avatar: true, src: mapChainToAvatar(item) }
        }
    });

    const toTranBridge = fromTranBridge;

    const sourceAccounts = fromAccountS.map(item => {
        return {
            key: item,
            text: item,
            value: item,
            image: { avatar: true, src: userAvatar }
        }
    });

    const targetAccounts = toAccountS.map(item => {
        return {
            key: item,
            text: item,
            value: item,
            image: { avatar: true, src: userAvatar }
        }
    })

    const switchHandler = (e) => {
        e.preventDefault();
        onSwapChainsPressed();
    }

    const handleChangeFrom = (e) => {
        e.preventDefault();
        
        if(toChain === e.target.innerText.replace(/(?:\r\n|\r|\n)/g, '')){
            selectToChain(fromChain);
            selectFromChain(e.target.innerText.replace(/(?:\r\n|\r|\n)/g, ''));
        }
    }

    const handleChangeTo = (e) => {
        e.preventDefault();
        if(fromChain === e.target.innerText.replace(/(?:\r\n|\r|\n)/g, '')){
            selectFromChain(toChain);
            selectToChain(e.target.innerText.replace(/(?:\r\n|\r|\n)/g, ''));
        }
       
    }

    const handleChangeFromAcct = (e) => {
        e.preventDefault();
        selectFromAccount(e.target.innerText.replace(/(?:\r\n|\r|\n)/g, ''))
    }

    const handleChangeToAcct = (e) => {
        e.preventDefault();
        selectToAccount(e.target.innerText.replace(/(?:\r\n|\r|\n)/g, ''))
    }

    return (
        <Fragment>
            <div className={`${Classes.switcherWrap} d-flex align-items-center justify-content-center`}>
                <CardWrap>
                    <SelectItem label={"From"}>
                        <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={fromTranBridge}
                            onChange={e => handleChangeFrom(e)}
                            value={fromChain}
                        />
                    </SelectItem>

                    <SelectItem label={"Source Account"}>
                    <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={sourceAccounts}
                            onChange={e=>handleChangeFromAcct(e)}
                            value={fromAccount}
                        />
                    </SelectItem>
                </CardWrap>

                <button
                    className={`${Classes.switchModeBtn} d-flex flex-column`}
                    onClick={switchHandler}
                >
                    <Image src={rightArrow} />
                    <Image src={leftArrow} className={"mt-1"} />
                </button>

                <CardWrap>
                    <SelectItem label={"To"}>
                        <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={toTranBridge}
                            onChange={e=>handleChangeTo(e)}
                            value={toChain}
                        />
                    </SelectItem>
                    <SelectItem label={"Target Account"}>
                    <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={targetAccounts}
                            onChange={e=>handleChangeToAcct(e)}
                            value={toAccount}
                        />
                    </SelectItem>
                </CardWrap>
            </div>
        </Fragment>

    );
};

const mapStateToProps = state => ({

    fromChain: state.selectReducer.fromChain,
    toChain: state.selectReducer.toChain,

    fromAccount: state.selectReducer.fromAccount,
    toAccount: state.selectReducer.toAccount,

    fromAccountS: state.selectReducer.fromAccountS,
    toAccountS: state.selectReducer.toAccountS,

});

const mapDispatchToProps = dispatch => ({
    onSwapChainsPressed: () => dispatch(swapChains()),

    selectFromChain: value => dispatch(selectFromChain(value)),
    selectToChain: value => dispatch(selectToChain(value)),
    selectFromAccount: value => dispatch(selectFromAccount(value)),
    selectToAccount: value => dispatch(selectToAccount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferNFTSwitcher);
