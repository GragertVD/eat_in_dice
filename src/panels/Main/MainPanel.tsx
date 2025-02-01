import { Button, Panel, PanelHeader, PanelHeaderBack, PanelProps } from '@vkontakte/vkui';
import { Icon24ShareOutline } from '@vkontakte/icons';

const MainPanel = ({ id }: PanelProps) => {

    return (
        <Panel id={id}>
            <PanelHeader
                delimiter="none"
                fixed
                before={<PanelHeaderBack />}
            />
            <Button size="l" mode="secondary">
                <Icon24ShareOutline />
            </Button>
        </Panel>
    );
};

export default MainPanel;
