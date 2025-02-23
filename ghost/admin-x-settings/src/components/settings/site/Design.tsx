import Button from '../../../admin-x-ds/global/Button';
import DesktopChrome from '../../../admin-x-ds/global/DesktopChrome';
import Heading from '../../../admin-x-ds/global/Heading';
import Hint from '../../../admin-x-ds/global/Hint';
import NiceModal from '@ebay/nice-modal-react';
import PreviewModal from '../../../admin-x-ds/global/PreviewModal';
import React from 'react';
import SettingGroup from '../../../admin-x-ds/settings/SettingGroup';
import SettingGroupContent from '../../../admin-x-ds/settings/SettingGroupContent';
import TabView from '../../../admin-x-ds/global/TabView';
import TextField from '../../../admin-x-ds/global/TextField';
import {Tab} from '../../../admin-x-ds/global/TabView';

const Preview: React.FC = () => {
    return (
        <>
            <DesktopChrome>
                <div className='flex h-full items-center justify-center bg-grey-50 text-sm text-grey-400'>
                    Preview iframe
                </div>
            </DesktopChrome>
        </>
    );
};

const Brand: React.FC = () => {
    return (
        <div className='mt-7'>
            <SettingGroupContent>
                <TextField 
                    key='site-description'
                    clearBg={true}
                    hint='Used in your theme, meta data and search results' 
                    title='Site description'
                />
                <div className='flex items-center justify-between gap-3'>
                    <Heading level={6}>Accent color</Heading>
                    <div className='relative max-w-[90px]'>
                        <span className='absolute left-1 top-[9px] text-grey-600'>#</span>
                        <TextField 
                            key='accent-color'
                            className='text-right'
                            clearBg={true}
                            maxLength={6}
                        />
                    </div>
                </div>
                <div>
                    <Heading level={6}>Publication icon</Heading>
                    <div className='mt-2 flex gap-3'>
                        <Hint className='mr-5'>A square, social icon, at least 60x60px</Hint>
                        <Button color='grey' label='Upload icon' />
                    </div>
                </div>
                <div>
                    <Heading level={6}>Publication logo</Heading>
                    <Button className='mt-2' color='grey' fullWidth={true} label='Upload logo' />
                </div>
                <div>
                    <Heading level={6}>Publication cover</Heading>
                    <Button className='mt-2' color='grey' fullWidth={true} label='Upload cover' />
                </div>
            </SettingGroupContent>
        </div>
    );
};

const Sidebar: React.FC = () => {
    const tabs: Tab[] = [
        {
            id: 'brand',
            title: 'Brand',
            contents: <Brand />
        },
        {
            id: 'site-wide',
            title: 'Site wide',
            contents: 'Site wide'
        },
        {
            id: 'homepage',
            title: 'Homepage',
            contents: 'Homepage'
        },
        {
            id: 'post',
            title: 'Post',
            contents: 'Post'
        }
    ];

    return (
        <TabView tabs={tabs} />
    );
};

const Design: React.FC = () => {
    const openPreviewModal = () => {
        NiceModal.show(PreviewModal, {
            title: 'Design',
            okLabel: 'Save',
            preview: <Preview />,
            sidebar: <Sidebar />
        });
    };

    return (
        <SettingGroup
            customButtons={<Button color='green' label='Customize' link onClick={openPreviewModal}/>}
            description="Customize your site and manage themes"
            title="Branding and design"
        >
            
        </SettingGroup>
    );
};

export default Design;